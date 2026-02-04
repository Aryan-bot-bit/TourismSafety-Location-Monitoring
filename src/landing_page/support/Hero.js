import React from "react";

// Reusable Card Component for Quick Access
function QuickCard({ title, description, href, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <a
        href={href}
        className="text-decoration-none text-dark"
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          display: "block",
          height: "100%",
          transition: "0.3s",
        }}
      >
        <div className="d-flex align-items-center mb-3">
          <i className={`fa ${icon} fa-2x me-3`} aria-hidden="true"></i>
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
      </a>
    </div>
  );
}

// Reusable Card Component for Featured FAQ / Destinations
function FeaturedCard({ title, href }) {
  return (
    <li className="mb-2">
      <a href={href}>{title}</a>
    </li>
  );
}

function Hero() {
  const quickCards = [
    {
      title: "Popular Destinations",
      description: "Explore top tourist spots across India.",
      href: "#destinations",
      icon: "fa-map-marker",
    },
    {
      title: "Travel Tips",
      description: "Get tips for safe and fun journeys.",
      href: "#tips",
      icon: "fa-lightbulb-o",
    },
    {
      title: "Itineraries",
      description: "Pre-planned travel guides for your trip.",
      href: "#itineraries",
      icon: "fa-road",
    },
    {
      title: "Accommodation",
      description: "Find hotels, resorts, and homestays.",
      href: "#hotels",
      icon: "fa-bed",
    },
    {
      title: "Transport",
      description: "Flights, trains, buses, and more.",
      href: "#transport",
      icon: "fa-bus",
    },
    {
      title: "Travel Packages",
      description: "Book curated tours and packages.",
      href: "#packages",
      icon: "fa-suitcase",
    },
  ];

  const featuredList = [
    {
      title: "Top Hill Stations to Visit in 2025",
      href: "#hillstations",
    },
    {
      title: "Best Beaches for Family Trips",
      href: "#beaches",
    },
    {
      title: "Adventure Tourism Hotspots",
      href: "#adventure",
    },
    {
      title: "Historical Places in India",
      href: "#historical",
    },
    {
      title: "Cultural Festivals You Shouldn’t Miss",
      href: "#festivals",
    },
  ];

  return (
    <section className="container-fluid p-5" style={{ background: "#f7f7f7" }}>
      <div className="text-center mb-5">
        <h1>Tourism Support Portal</h1>
        <p>
          Search for answers, browse destinations, or get travel guidance
        </p>
      </div>

      {/* Search Bar */}
      <div className="row mb-5 justify-content-center">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Eg. Best hill stations in India"
          />
        </div>
      </div>

      {/* Quick Cards */}
      <div className="row mb-5">
        {quickCards.map((card, index) => (
          <QuickCard
            key={index}
            title={card.title}
            description={card.description}
            href={card.href}
            icon={card.icon}
          />
        ))}
      </div>

      {/* Featured Section */}
      <div className="row">
        <div className="col-md-6">
          <h2>Featured Travel Guides</h2>
          <ul>
            {featuredList.map((item, idx) => (
              <FeaturedCard key={idx} title={item.title} href={item.href} />
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80"
            className="img-fluid rounded"
            alt="Tourism Banner"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
