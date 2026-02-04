import React from "react";

function Hero() {
  return (
    <section
      className="d-flex align-items-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      ></div>

      {/* Content */}
      <div
        className="container position-relative"
        style={{ zIndex: 2, maxWidth: "800px" }}
      >
        <h1 className="fw-bold display-4 mb-3">
          Travel Safe, <span className="text-warning">Explore Freely</span>
        </h1>
        <p className="fs-5 mb-4 text-light">
          A smart safety platform that protects travelers with real-time
          monitoring, instant emergency support, and trusted local guidance.
        </p>
        <div>
          <a href="#features" className="btn btn-warning btn-lg mx-2 fw-bold">
            Explore Features
          </a>
          <a href="#pricing" className="btn btn-outline-light btn-lg mx-2">
            View Plans
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
