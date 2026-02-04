
const socket = io();

// Start geolocation stream
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error("Geolocation error:", error);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
  );
}

// Initialize map
const map = L.map("map").setView([28.6692, 77.4538], 12);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "ABESIT",
}).addTo(map);

const markers = {};

// --- RED DANGER ZONE (circle example)
const dangerCenter = [28.63404298059361, 77.44724775342465];
const dangerRadius = 5000; // 5 km

const dangerCircle = L.circle(dangerCenter, {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.3,
  radius: dangerRadius,
}).addTo(map);

// --- GREEN SAFE ZONE (trapezoid)
const safeTrapezoidCoords = [
  [28.745, 77.60],   // top-left
  [28.745, 77.633],  // top-right
  [28.675, 77.625],  // bottom-right
  [28.675, 77.605],  // bottom-left
];

const safeTrapezoid = L.polygon(safeTrapezoidCoords, {
  color: "green",
  fillColor: "#0f3",
  fillOpacity: 0.3,
}).addTo(map);

// Fit map to show both zones
const group = new L.featureGroup([dangerCircle, safeTrapezoid]);
map.fitBounds(group.getBounds());

let isInDanger = false;
let isInSafeZone = false;

// Helper function: check if point is inside trapezoid
function isPointInPolygon(point, polygon) {
  const x = point[0], y = point[1];
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0], yi = polygon[i][1];
    const xj = polygon[j][0], yj = polygon[j][1];
    const intersect = ((yi > y) !== (yj > y)) &&
      (x < ((xj - xi) * (y - yi)) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Listen for location updates
socket.on("receive-location", (data) => {
  const { id, latitude, longitude } = data;
  const userLatLng = L.latLng(latitude, longitude);

  // Center map on user
  map.setView([latitude, longitude], 16);

  // Update or create marker
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }

  // Check RED danger zone
  const distanceToDanger = userLatLng.distanceTo(L.latLng(dangerCenter));
  if (distanceToDanger <= dangerRadius) {
    if (!isInDanger) {
      isInDanger = true;
      alert(
        "⚠️ You have entered a RED ALERT zone (5 km radius). This area is dangerous. Please move out immediately."
      );
      markers[id].bindPopup("🚨 Red Alert Zone!").openPopup();
    }
  } else if (isInDanger) {
    isInDanger = false;
    markers[id].bindPopup("✅ You left the danger zone.").openPopup();
  }

  // Check GREEN safe trapezoid
  if (isPointInPolygon([latitude, longitude], safeTrapezoidCoords)) {
    if (!isInSafeZone) {
      isInSafeZone = true;
      markers[id].bindPopup("✅ You are in a SAFE trapezoid zone now.").openPopup();
    }
  } else if (isInSafeZone) {
    isInSafeZone = false;
    markers[id].bindPopup("⚠️ You left the safe zone!").openPopup();
  }
});

// disconnected users
socket.on("user-disconnect", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});


