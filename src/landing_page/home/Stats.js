import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Content */}
        <div className="col-lg-6 mb-4">
          <h1 className="fs-1 fw-bold mb-4">Trusted by Travelers Worldwide</h1>
          <p className="text-muted mb-4">
            Our tourism safety platform is designed to keep your journeys safe
            and stress-free. Real-time tracking, instant emergency support, and
            verified local guides — all in one app.
          </p>

          {/* Highlights */}
          <div className="mb-3">
            <h2 className="fs-5 fw-semibold">
              <i className="fa fa-user-shield text-success me-2"></i>
              Safety First
            </h2>
            <p className="text-muted">
              24/7 emergency assistance and real-time location sharing with
              family.
            </p>
          </div>

          <div className="mb-3">
            <h2 className="fs-5 fw-semibold">
              <i className="fa fa-globe text-primary me-2"></i>
              Global Coverage
            </h2>
            <p className="text-muted">
              Trusted in 50+ countries and 200+ cities with active traveler
              support.
            </p>
          </div>

          <div className="mb-3">
            <h2 className="fs-5 fw-semibold">
              <i className="fa fa-heart text-danger me-2"></i>
              Community Driven
            </h2>
            <p className="text-muted">
              Backed by thousands of travelers sharing tips, reviews, and local
              insights.
            </p>
          </div>
        </div>

        {/* Right Side with Stats */}
        <div className="col-lg-6 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="Travel Safety"
            style={{ width: "70%", marginBottom: "20px" }}
          />

          {/* Stats Row */}
          <div className="row text-center mt-3">
            <div className="col-4">
              <h2 className="fw-bold text-success">2M+</h2>
              <p className="text-muted">Safe Trips</p>
            </div>
            <div className="col-4">
              <h2 className="fw-bold text-primary">50+</h2>
              <p className="text-muted">Countries</p>
            </div>
            <div className="col-4">
              <h2 className="fw-bold text-danger">24/7</h2>
              <p className="text-muted">Emergency Help</p>
            </div>
          </div>

          {/* Action Links */}
          <div className="mt-4">
            <a
              href="#"
              className="mx-3 fw-semibold"
              style={{ textDecoration: "none" }}
            >
              Explore Features{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              className="fw-semibold"
              style={{ textDecoration: "none" }}
            >
              Try Live Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
