import React from 'react'

function Footer() {
    return ( 
           <div className="container mt-5 text-center">
      {/* Heading */}
      <h1 className="mb-3">Why Choose Us?</h1>
      <p className="text-muted mb-5">
        Smart Tourist Safety Monitoring & Incident Response trusted by millions
        of travelers worldwide.
      </p>

      {/* Features Section */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Live Tracking"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#e8f5e9",
                }}
              />
            </div>
            <h5>Live Tourist Tracking</h5>
            <p>
              Track your route safely with real-time GPS updates and smart
              alerts.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1483/1483336.png"
                alt="Emergency"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#fff3e0",
                }}
              />
            </div>
            <h5>24/7 Emergency Response</h5>
            <p>
              Get instant emergency support and connect with nearest rescue
              centers.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Weather"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#e3f2fd",
                }}
              />
            </div>
            <h5>Weather & Disaster Alerts</h5>
            <p>
              Stay updated with live weather forecasts and disaster warnings in
              tourist areas.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Guides"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#f3e5f5",
                }}
              />
            </div>
            <h5>Verified Local Guides</h5>
            <p>
              Explore confidently with guides verified by our safety standards.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                alt="Reviews"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#fce4ec",
                }}
              />
            </div>
            <h5>Tourist Reviews</h5>
            <p>
              Trusted ratings and reviews help you choose safe destinations.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <div className="mb-3">
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="Coverage"
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  padding: "10px",
                  background: "#ede7f6",
                }}
              />
            </div>
            <h5>Global Coverage</h5>
            <p>
              Our platform covers 2000+ tourist destinations worldwide with
              reliable support.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Logos */}
      {/* Bottom Logos */}
{/* <div className="mt-5">
  <p className="text-muted">Trusted by global travel & safety leaders</p>
  <img
    src="https://1000logos.net/wp-content/uploads/2021/04/UNWTO-logo.png"
    alt="UNWTO"
    style={{ width: "120px", margin: "10px" }}
  />
  <img
    src="https://1000logos.net/wp-content/uploads/2018/08/World-Health-Organization-logo.png"
    alt="WHO"
    style={{ width: "120px", margin: "10px" }}
  />
</div> */}
 <footer className="text-center py-4 bg-light mt-5">
        <p>© 2025 Smart Tourist Safety Monitoring</p>
        <p><a href="#privacy">Privacy</a> | <a href="#terms">Terms</a></p>
      </footer>
    </div>
     );
}

export default Footer;