import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 text-center">
      {/* Heading */}
      <h1 className="mb-3 fw-bold">Flexible Plans for Every Traveler</h1>
      <p className="text-muted mb-5">
        Choose a safety plan that fits your journey. Transparent pricing, no
        hidden charges.
      </p>

      {/* Pricing Cards */}
      <div className="row g-4">
        {/* Free Plan */}
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm h-100 bg-white">
            <h3 className="fw-bold">Free</h3>
            <h2 className="text-success mb-3">₹0</h2>
            <p className="text-muted">Perfect for casual travelers</p>
            <ul className="list-unstyled mt-3 mb-4">
              <li>✔ Live Location Sharing</li>
              <li>✔ Weather Updates</li>
              <li>✔ Tourist Reviews</li>
              <li>✘ Emergency Hotline</li>
              <li>✘ Premium Guides</li>
            </ul>
            <button className="btn btn-outline-success w-100">
              Get Started
            </button>
          </div>
        </div>

        {/* Premium Plan (Highlighted) */}
        <div className="col-md-4">
          <div
            className="p-4 border rounded shadow-lg h-100 text-white"
            style={{ background: "linear-gradient(135deg, #4caf50, #2e7d32)" }}
          >
            <h3 className="fw-bold">Premium</h3>
            <h2 className="mb-3">₹499 / month</h2>
            <p>Best for frequent travelers</p>
            <ul className="list-unstyled mt-3 mb-4">
              <li>✔ Live Tracking + Smart Routes</li>
              <li>✔ 24/7 Emergency Hotline</li>
              <li>✔ Verified Local Guides</li>
              <li>✔ Weather & Disaster Alerts</li>
              <li>✔ Priority Customer Support</li>
            </ul>
            <button className="btn btn-light w-100 fw-bold">
              Choose Premium
            </button>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm h-100 bg-white">
            <h3 className="fw-bold">Enterprise</h3>
            <h2 className="text-primary mb-3">Custom</h2>
            <p className="text-muted">For agencies & group tours</p>
            <ul className="list-unstyled mt-3 mb-4">
              <li>✔ Dedicated Support Team</li>
              <li>✔ Custom Safety Dashboard</li>
              <li>✔ Integration with Travel Apps</li>
              <li>✔ Group Emergency Coverage</li>
              <li>✔ Volume Discounts</li>
            </ul>
            <button className="btn btn-outline-primary w-100">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
