import React from 'react';

function TourismPage() {
  const rajasthanPlaces = [
    { name: 'Jaipur City Palace', location: 'Jaipur', link: '#' },
    { name: 'Amber Fort', location: 'Jaipur', link: '#' },
    { name: 'Jaisalmer Fort', location: 'Jaisalmer', link: '#' },
    { name: 'Udaipur Lake Palace', location: 'Udaipur', link: '#' },
    { name: 'Pushkar Camel Fair', location: 'Pushkar', link: '#' },
    { name: 'Chittorgarh Fort', location: 'Chittorgarh', link: '#' },
    { name: 'Bikaner Junagarh Fort', location: 'Bikaner', link: '#' },
    { name: 'Mehrangarh Fort', location: 'Jodhpur', link: '#' },
    { name: 'Ranthambore National Park', location: 'Sawai Madhopur', link: '#' },
    { name: 'Mount Abu', location: 'Sirohi', link: '#' },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Top Rajasthan Destinations</h1>
      <div className="row g-4">
        {rajasthanPlaces.map((place, index) => (
          <div key={index} className="col-md-4">
            <div
              className="card shadow-sm p-3"
              style={{ cursor: 'pointer', height: '100%' }}
            >
              <h5>{place.name}</h5>
              <p className="text-muted">{place.location}</p>
              <a href={place.link} className="btn btn-primary">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TourismPage;
