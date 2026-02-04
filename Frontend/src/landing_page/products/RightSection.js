import React, { useState } from "react";

function TourismPage() {
  const [activeDetail, setActiveDetail] = useState(null);

  const openDetail = (placeId) => setActiveDetail(placeId);
  const closeDetail = () => setActiveDetail(null);

  const places = [
    {
      id: "gulmarg",
      name: "Gulmarg",
      location: "Jammu & Kashmir, India",
      weather: "Snowy winters, cool summers",
      bestSeason: "December – March (for snow), May – September (for greenery)",
      disasters: "Occasional heavy snowfall, avalanches",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      imgLarge:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
      reviews: [
        "⭐ 5 – Best skiing destination in India.",
        "⭐ 4 – Beautiful snow-capped mountains.",
      ],
      tagline: "India's premier ski resort and winter wonderland.",
    },
    {
      id: "auli",
      name: "Auli",
      location: "Uttarakhand, India",
      weather: "Cold and snowy winters, pleasant summers",
      bestSeason: "December – March (for snow), April – June (for trekking)",
      disasters: "Occasional landslides, heavy snowfall",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
      imgLarge:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80",
      reviews: [
        "⭐ 5 – Amazing ski slopes and cable car rides.",
        "⭐ 4 – Stunning Himalayan views.",
      ],
      tagline: "Snowy slopes and panoramic Himalayan vistas.",
    },
    {
      id: "manali",
      name: "Manali",
      location: "Himachal Pradesh, India",
      weather: "Cold winters, cool summers",
      bestSeason: "October – February (for snow), May – July (for pleasant weather)",
      disasters: "Occasional landslides, heavy snowfall",
      img: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1d?auto=format&fit=crop&w=900&q=80",
      imgLarge:
        "https://images.unsplash.com/photo-1527866959252-deab85ef7d1d?auto=format&fit=crop&w=1600&q=80",
      reviews: [
        "⭐ 5 – Perfect hill station for snow lovers.",
        "⭐ 4 – Gets crowded in peak season.",
      ],
      tagline: "Snow, adventure, and mountain beauty.",
    },
    // Add more ice hill places as needed...
  ];

  return (
    <main className="container my-5">
      <h1 className="text-center mb-5">Explore India</h1>

      {/* Places Grid */}
      <div className="row g-4">
        {places.map((place) => (
          <div key={place.id} className="col-md-4 d-flex">
            <div
              className="card shadow-sm place-card w-100"
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "420px", // Fixed card height
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 6px rgba(0,0,0,0.1)";
              }}
              onClick={() => openDetail(place.id)}
            >
              <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
                <img
                  src={place.img}
                  className="card-img-top"
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.375rem",
                    borderTopRightRadius: "0.375rem",
                  }}
                />
              </div>
              <div
                className="card-body"
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">
                    {place.tagline} <br /> {place.reviews[0]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left/Right Featured Sections */}
      {places.map((place, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div key={place.id} className="container mt-5">
            <div className="row align-items-center">
              {isLeft && (
                <div className="col-6">
                  <img src={place.img} alt={place.name} className="img-fluid rounded shadow" />
                </div>
              )}
              <div className="col-6 p-5 mt-5">
                <h2>{place.name}</h2>
                <p>{place.tagline}</p>
                <p>
                  <strong>Location:</strong> {place.location} <br />
                  <strong>Weather:</strong> {place.weather} <br />
                  <strong>Best Season:</strong> {place.bestSeason} <br />
                  <strong>Disasters:</strong> {place.disasters}
                </p>
                <a
                  href={`/place/${place.id}`}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
              {!isLeft && (
                <div className="col-6">
                  <img src={place.img} alt={place.name} className="img-fluid rounded shadow" />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {activeDetail && (
        <div
          className="modal-overlay"
          onClick={closeDetail}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content bg-white p-5 rounded"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "800px", width: "90%", position: "relative" }}
          >
            <button
              className="btn btn-danger"
              onClick={closeDetail}
              style={{ fontSize: "1.5em", padding: "10px 20px", position: "absolute", top: "10px", right: "10px" }}
            >
              ✖ Close
            </button>
            <img
              src={places.find((p) => p.id === activeDetail).imgLarge}
              className="img-fluid rounded mb-3"
              alt={places.find((p) => p.id === activeDetail).name}
            />
            <h2>{places.find((p) => p.id === activeDetail).name}</h2>
            <p>
              <strong>Location:</strong>{" "}
              {places.find((p) => p.id === activeDetail).location}
            </p>
            <p>
              <strong>Weather:</strong>{" "}
              {places.find((p) => p.id === activeDetail).weather}
            </p>
            <p>
              <strong>Best Season:</strong>{" "}
              {places.find((p) => p.id === activeDetail).bestSeason}
            </p>
            <p>
              <strong>Last Disasters:</strong>{" "}
              {places.find((p) => p.id === activeDetail).disasters}
            </p>
            <ul>
              {places
                .find((p) => p.id === activeDetail)
                .reviews.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}

export default TourismPage;
