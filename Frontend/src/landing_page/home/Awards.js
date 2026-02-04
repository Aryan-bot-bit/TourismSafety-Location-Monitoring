import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80"
            alt="Tourism Safety"
            style={{ width: "80%", borderRadius: "10px" }}
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-6">
          <h1 className="mb-3 fs-2">Smart Tourist Safety & Support</h1>
          <p>
            A next-gen tourism platform providing real-time safety monitoring,
            live tracking, and instant support for travelers across India and
            beyond.
          </p>

          {/* Live Tracking */}
          <div className="mb-4">
  <h5>📍 Live Tracking</h5>
  <p>
    Stay connected with your friends and family by sharing your live
    location during travel for complete peace of mind.
  </p>
  <a
    href="http://localhost:8000/"
    style={{ textDecoration: "none", color: "#007bff" }}
  >
    Explore Live Tracking{" "}
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
</div>

          {/* Emergency Services */}
          <div className="mb-4">
            <h5>🚨 Emergency Services</h5>
            <p>
              Quick access to local helplines, nearby hospitals, and police
              stations during emergencies at the click of a button.
            </p>
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              View Emergency Support{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          {/* Incident Reporting */}
          <div className="mb-4">
            <h5>📝 Incident Reporting</h5>
            <p>
              Instantly report safety concerns, lost belongings, or accidents to
              local authorities through our platform.
            </p>
            <a href="#" style={{ textDecoration: "none", color: "#007bff" }}>
              Report Incident{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
