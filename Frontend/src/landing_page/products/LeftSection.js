import React from "react";

// ✅ Reusable Tourism Section component
function TourismSection({
  imageURL,
  placeName,
  location,
  weather,
  bestSeason,
  disasters,
  tagline,
  reviews = [],
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left: Place Image */}
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 text-center">
          <img
            src={imageURL}
            alt={placeName}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        {/* Right: Place Details */}
        <div className="col-lg-6 col-md-12 p-4">
          <h1 className="fw-bold">{placeName}</h1>
          <p className="text-muted fs-5">{tagline}</p>

          <ul className="list-unstyled">
            <li><strong>📍 Location:</strong> {location}</li>
            <li><strong>🌦 Weather:</strong> {weather}</li>
            <li><strong>🗓 Best Season:</strong> {bestSeason}</li>
            <li><strong>⚠ Last Disasters:</strong> {disasters}</li>
          </ul>

          {reviews.length > 0 && (
            <div className="mt-3">
              <h5>User Reviews:</h5>
              <ul>
                {reviews.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {learnMore && (
            <div className="mt-4">
              <a
                href={learnMore}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <i className="fa fa-arrow-right ms-1" aria-hidden="true"></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ✅ Example usage
function App() {
  return (
    <div>
      <TourismSection
        imageURL="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
        placeName="Ladakh"
        location="Jammu & Kashmir, India"
        weather="Extreme cold winters, mild summers"
        bestSeason="June – September"
        disasters="2010 Leh cloudburst"
        tagline="Mountains, monasteries, and adventure in the land of high passes."
        reviews={[
          "⭐ 5 – Heaven for bikers.",
          "⭐ 4 – Very remote and cold.",
        ]}
        learnMore="https://en.wikipedia.org/wiki/Ladakh"
      />
    </div>
  );
}

export default App;
