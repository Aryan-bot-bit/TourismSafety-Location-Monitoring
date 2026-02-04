import React from "react";

function TourismFeatures() {
  return (
    



<div className="container mt-5 text-center">
      {/* Heading */}
      <h1 className="mb-3 fw-bold">Your Safety, Our Priority</h1>
      <p className="text-muted mb-5">
        Explore the world with confidence using our smart monitoring and
        emergency response system.
      </p>

      {/* Features Section */}
      <div className="row g-4">
        {/* Feature 1 */}
        <div className="col-md-4">
          <div className="p-4 rounded shadow-lg bg-gradient-to-r from-green-100 to-green-200 h-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
              alt="Safe Routes"
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h5>Smart Routes</h5>
            <p>Discover the safest travel routes with live risk detection.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-md-4">
          <div className="p-4 rounded shadow-lg bg-gradient-to-r from-red-100 to-red-200 h-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
              alt="SOS"
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h5>One-Tap SOS</h5>
            <p>Instantly alert emergency services and family in seconds.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-md-4">
          <div className="p-4 rounded shadow-lg bg-gradient-to-r from-blue-100 to-blue-200 h-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
              alt="Weather"
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h5>Real-Time Weather</h5>
            <p>Get climate updates and disaster alerts instantly.</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-lg bg-gradient-to-r from-purple-100 to-purple-200 h-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png"
              alt="Verified Guides"
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h5>Trusted Local Guides</h5>
            <p>Explore hidden gems with experts vetted for your safety.</p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="col-md-6">
          <div className="p-4 rounded shadow-lg bg-gradient-to-r from-yellow-100 to-yellow-200 h-100">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3443/3443338.png"
              alt="AI Insights"
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h5>AI Safety Insights</h5>
            <p>
              Our AI predicts crowd density, crime hotspots, and travel risks.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <blockquote className="blockquote">
          <p className="mb-3">
            "This platform gave me peace of mind during my solo trip. I could
            track safe areas, get weather alerts, and even connect with local
            guides. Highly recommended!"
          </p>
          <footer className="blockquote-footer">
            Aryan Tomar, <cite>Traveler from India</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default TourismFeatures;
