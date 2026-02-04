import React from 'react';

function Universe() {
  const destinations = [
    {
      name: "Manali",
      img: "https://images.unsplash.com/photo-1587502536263-3c36f822a7ff?auto=format&fit=crop&w=400&q=80",
      desc: "Himalayan hill station with scenic valleys and adventure sports",
    },
    {
      name: "Shimla",
      img: "https://images.unsplash.com/photo-1608571423132-21d2e5cf04bc?auto=format&fit=crop&w=400&q=80",
      desc: "Snowy peaks, colonial charm and lush green hills",
    },
    {
      name: "Gulmarg",
      img: "https://images.unsplash.com/photo-1615395179612-0d0b0a3b1b50?auto=format&fit=crop&w=400&q=80",
      desc: "Popular skiing destination with snowy slopes",
    },
    {
      name: "Darjeeling",
      img: "https://images.unsplash.com/photo-1588295454711-214f78a8b8c0?auto=format&fit=crop&w=400&q=80",
      desc: "Tea gardens, mountains and misty landscapes",
    },
    {
      name: "Auli",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=400&q=80",
      desc: "Snow-capped slopes ideal for skiing and trekking",
    },
    {
      name: "Leh-Ladakh",
      img: "https://images.unsplash.com/photo-1603072562751-0b0b5d1b0e9c?auto=format&fit=crop&w=400&q=80",
      desc: "High altitude desert, mountains and Buddhist monasteries",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>Explore Hill & Snow Destinations</h1>
        <p>
          Discover some of the most scenic and serene destinations in India.
        </p>

        {destinations.map((dest, index) => (
          <div key={index} className="col-4 p-3 mt-5">
            <img
              src={dest.img}
              alt={dest.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" }}
            />
            <p className="text-small text-muted mt-2">{dest.name}</p>
            <p className="text-small">{dest.desc}</p>
          </div>
        ))}

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "40px auto 0 auto" }}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Universe;
