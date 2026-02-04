// import React, { useState } from "react";

// function Hero() {
//   const [activeDetail, setActiveDetail] = useState(null);

//   const openDetail = (place) => setActiveDetail(place);
//   const closeDetail = () => setActiveDetail(null);

//   // ✅ 25+ tourist places in India
//   const places = [
//     {
//       id: "Himachal",
//       name: "Taj Mahal",
//       location: "Agra, India",
//       weather: "Hot summers, mild winters",
//       bestSeason: "October – March",
//       disasters: "2019 floods nearby, 2021 Covid restrictions",
//       img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Absolutely breathtaking.", "⭐ 4 – Crowded but worth it."],
//       rating: "⭐ 4.8",
//       tagline: "A symbol of love, must-visit once in a lifetime.",
//     },
//     {
//       id: "jaipur",
//       name: "Jaipur City Palace",
//       location: "Jaipur, Rajasthan, India",
//       weather: "Hot summers, pleasant winters",
//       bestSeason: "November – February",
//       disasters: "2020 locust attack, 2021 pandemic",
//       img: "https://images.unsplash.com/photo-1609940194206-8976f5f85c42?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1609940194206-8976f5f85c42?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Felt like royalty.", "⭐ 4 – Too many tourists."],
//       rating: "⭐ 4.6",
//       tagline: "Royal vibes and amazing architecture.",
//     },
//     {
//       id: "goa",
//       name: "Goa Beaches",
//       location: "Goa, India",
//       weather: "Tropical, humid",
//       bestSeason: "November – February",
//       disasters: "2018 cyclone, 2021 Covid impact",
//       img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",
//       reviews: [
//         "⭐ 5 – Amazing nightlife.",
//         "⭐ 4 – Beaches are great, but crowded.",
//       ],
//       rating: "⭐ 4.7",
//       tagline: "Perfect for sunsets, parties, and relaxation.",
//     },
//     {
//       id: "kerala",
//       name: "Kerala Backwaters",
//       location: "Alleppey, Kerala, India",
//       weather: "Humid, tropical",
//       bestSeason: "September – March",
//       disasters: "2018 Kerala floods",
//       img: "https://images.unsplash.com/photo-1601265377804-0bc88dfb1ef0?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1601265377804-0bc88dfb1ef0?auto=format&fit=crop&w=1600&q=80",
//       reviews: [
//         "⭐ 5 – Mesmerizing houseboat ride.",
//         "⭐ 4 – Peaceful but humid.",
//       ],
//       rating: "⭐ 4.6",
//       tagline: "Serene houseboats and lush greenery.",
//     },
//     {
//       id: "ladakh",
//       name: "Ladakh",
//       location: "Jammu & Kashmir, India",
//       weather: "Extreme cold winters, mild summers",
//       bestSeason: "June – September",
//       disasters: "2010 Leh cloudburst",
//       img: "https://images.unsplash.com/photo-1623434096707-cdf5cb918416?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1623434096707-cdf5cb918416?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Heaven for bikers.", "⭐ 4 – Very remote and cold."],
//       rating: "⭐ 4.9",
//       tagline: "Mountains, monasteries, and adventure.",
//     },
//     {
//       id: "varanasi",
//       name: "Varanasi Ghats",
//       location: "Uttar Pradesh, India",
//       weather: "Hot summers, foggy winters",
//       bestSeason: "October – March",
//       disasters: "2013 floods, Covid restrictions",
//       img: "https://images.unsplash.com/photo-1589308078055-9c35d4989b07?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1589308078055-9c35d4989b07?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Spiritual and peaceful.", "⭐ 4 – Too crowded at times."],
//       rating: "⭐ 4.7",
//       tagline: "Spiritual heart of India on the Ganges.",
//     },
//     {
//       id: "amritsar",
//       name: "Golden Temple",
//       location: "Amritsar, Punjab, India",
//       weather: "Hot summers, chilly winters",
//       bestSeason: "October – March",
//       disasters: "Historical conflicts, Covid restrictions",
//       img: "https://images.unsplash.com/photo-1573461168859-4a1a278eae35?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1573461168859-4a1a278eae35?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Spiritually uplifting.", "⭐ 5 – Free community kitchen."],
//       rating: "⭐ 4.9",
//       tagline: "Peace, devotion, and golden beauty.",
//     },
//     {
//       id: "manali",
//       name: "Manali",
//       location: "Himachal Pradesh, India",
//       weather: "Cold winters, cool summers",
//       bestSeason: "May – July, December – February",
//       disasters: "Occasional landslides",
//       img: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1d?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1527866959252-deab85ef7d1d?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Perfect hill station.", "⭐ 4 – Crowded in peak season."],
//       rating: "⭐ 4.8",
//       tagline: "Snow, adventure, and mountain beauty.",
//     },
//     {
//       id: "shimla",
//       name: "Shimla",
//       location: "Himachal Pradesh, India",
//       weather: "Snowy winters, cool summers",
//       bestSeason: "March – June, December – January",
//       disasters: "Landslides, heavy snowfall",
//       img: "https://images.unsplash.com/photo-1607083203731-1d84f7aa7b77?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1607083203731-1d84f7aa7b77?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Colonial charm.", "⭐ 4 – Gets crowded."],
//       rating: "⭐ 4.5",
//       tagline: "Queen of the hills with old-world charm.",
//     },
//     {
//       id: "udaipur",
//       name: "Udaipur",
//       location: "Rajasthan, India",
//       weather: "Hot summers, pleasant winters",
//       bestSeason: "October – March",
//       disasters: "Water shortages",
//       img: "https://images.unsplash.com/photo-1599661046327-f20dbab4160d?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1599661046327-f20dbab4160d?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Venice of the East.", "⭐ 4 – Lake rides are costly."],
//       rating: "⭐ 4.7",
//       tagline: "City of lakes with royal palaces.",
//     },
//     {
//       id: "hampi",
//       name: "Hampi",
//       location: "Karnataka, India",
//       weather: "Hot summers, mild winters",
//       bestSeason: "October – March",
//       disasters: "Ruins weather damage",
//       img: "https://images.unsplash.com/photo-1579684990480-3ed0fba9c78b?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1579684990480-3ed0fba9c78b?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Stunning ruins.", "⭐ 4 – Spread out area."],
//       rating: "⭐ 4.8",
//       tagline: "UNESCO world heritage with ancient temples.",
//     },
//     {
//       id: "darjeeling",
//       name: "Darjeeling",
//       location: "West Bengal, India",
//       weather: "Cool summers, cold winters",
//       bestSeason: "March – May, September – December",
//       disasters: "Landslides in monsoon",
//       img: "https://images.unsplash.com/photo-1549887534-1f4f47a3a6a1?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1549887534-1f4f47a3a6a1?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Best tea in the world.", "⭐ 4 – Scenic toy train."],
//       rating: "⭐ 4.8",
//       tagline: "Tea gardens, Kanchenjunga views, and toy train.",
//     },
//     {
//       id: "ellora",
//       name: "Ellora Caves",
//       location: "Maharashtra, India",
//       weather: "Hot summers, mild winters",
//       bestSeason: "October – March",
//       disasters: "Weather erosion",
//       img: "https://images.unsplash.com/photo-1619685364236-f11f3dce1d06?auto=format&fit=crop&w=900&q=80",
//       imgLarge:
//         "https://images.unsplash.com/photo-1619685364236-f11f3dce1d06?auto=format&fit=crop&w=1600&q=80",
//       reviews: ["⭐ 5 – Ancient caves.", "⭐ 4 – Needs better upkeep."],
//       rating: "⭐ 4.7",
//       tagline: "Rock-cut temples & UNESCO site.",
//     },
//   ];

//   return (
//     <main className="container my-5">
//       <h2 id="places" className="mb-4">Popular Tourist Places</h2>

//       {/* Places grid */}
//       <div className="row g-4">
//         {places.map((place) => (
//           <div key={place.id} className="col-md-4">
//             <div
//               className="card shadow-sm"
//               style={{
//                 cursor: "pointer",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-5px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 8px 20px rgba(0,0,0,0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow =
//                   "0 2px 6px rgba(0,0,0,0.1)";
//               }}
//               onClick={() => openDetail(place)}
//             >
//               <img src={place.img} className="card-img-top" alt={place.name} />
//               <div className="card-body">
//                 <h5 className="card-title">{place.name}</h5>
//                 <p className="card-text">
//                   {place.rating} | “{place.tagline}”
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {activeDetail && (
//         <div
//           className="d-flex align-items-center justify-content-center"
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.7)",
//             zIndex: 1050,
//             animation: "fadeIn 0.3s ease",
//           }}
//           onClick={closeDetail}
//         >
//           <div
//             className="bg-white rounded p-4"
//             style={{
//               maxWidth: "1000px",
//               width: "95%",
//               maxHeight: "90vh",
//               overflowY: "auto",
//               position: "relative",
//               animation: "scaleUp 0.3s ease",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="btn btn-danger"
//               style={{
//                 fontSize: "1.2rem",
//                 padding: "10px 20px",
//                 position: "absolute",
//                 top: "15px",
//                 right: "15px",
//                 borderRadius: "8px",
//               }}
//               onClick={closeDetail}
//             >
//               ✖ Close
//             </button>
//             <img
//               src={activeDetail.imgLarge}
//               className="img-fluid rounded mb-3"
//               alt={activeDetail.name}
//             />
//             <h2>{activeDetail.name}</h2>
//             <p><strong>Location:</strong> {activeDetail.location}</p>
//             <p><strong>Weather:</strong> {activeDetail.weather}</p>
//             <p><strong>Best Season:</strong> {activeDetail.bestSeason}</p>
//             <p><strong>Last Disasters:</strong> {activeDetail.disasters}</p>
//             <ul>
//               {activeDetail.reviews.map((r, i) => (
//                 <li key={i}>{r}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style>
//         {`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleUp {
//           from { transform: scale(0.85); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//       `}
//       </style>
//     </main>
//   );
// }

// export default Hero;





import React, { useState } from "react";

function Hero() {
  const [activeDetail, setActiveDetail] = useState(null);

  const openDetail = (place) => setActiveDetail(place);
  const closeDetail = () => setActiveDetail(null);

  // ✅ 25+ tourist places in India
  const places = [
    {
      id: "munnar",
      name: "Munnar",
      location: "Kerala, India",
      weather: "Cool and pleasant throughout the year",
      bestSeason: "September – May",
      disasters: "2018 Kerala floods, 2020 landslides",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Breathtaking tea gardens.", "⭐ 4 – Perfect weather and scenery."],
      rating: "⭐ 4.8",
      tagline: "Green paradise with endless tea plantations.",
    },
    {
      id: "jaipur",
      name: "Jaipur City Palace",
      location: "Jaipur, Rajasthan, India",
      weather: "Hot summers, pleasant winters",
      bestSeason: "November – February",
      disasters: "2020 locust attack, 2021 pandemic",
      img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Felt like royalty.", "⭐ 4 – Too many tourists."],
      rating: "⭐ 4.6",
      tagline: "Royal vibes and amazing architecture.",
    },
    {
      id: "goa",
      name: "Goa Beaches",
      location: "Goa, India",
      weather: "Tropical, humid",
      bestSeason: "November – February",
      disasters: "2018 cyclone, 2021 Covid impact",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
      reviews: [
        "⭐ 5 – Amazing nightlife.",
        "⭐ 4 – Beaches are great, but crowded.",
      ],
      rating: "⭐ 4.7",
      tagline: "Perfect for sunsets, parties, and relaxation.",
    },
    {
      id: "kerala",
      name: "Kerala Backwaters",
      location: "Alleppey, Kerala, India",
      weather: "Humid, tropical",
      bestSeason: "September – March",
      disasters: "2018 Kerala floods",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80",
      reviews: [
        "⭐ 5 – Mesmerizing houseboat ride.",
        "⭐ 4 – Peaceful but humid.",
      ],
      rating: "⭐ 4.6",
      tagline: "Serene houseboats and lush greenery.",
    },
    {
      id: "ladakh",
      name: "Ladakh",
      location: "Jammu & Kashmir, India",
      weather: "Extreme cold winters, mild summers",
      bestSeason: "June – September",
      disasters: "2010 Leh cloudburst",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Heaven for bikers.", "⭐ 4 – Very remote and cold."],
      rating: "⭐ 4.9",
      tagline: "Mountains, monasteries, and adventure.",
    },
    {
      id: "varanasi",
      name: "Varanasi Ghats",
      location: "Uttar Pradesh, India",
      weather: "Hot summers, foggy winters",
      bestSeason: "October – March",
      disasters: "2013 floods, Covid restrictions",
      img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Spiritual and peaceful.", "⭐ 4 – Too crowded at times."],
      rating: "⭐ 4.7",
      tagline: "Spiritual heart of India on the Ganges.",
    },
    {
      id: "amritsar",
      name: "Golden Temple",
      location: "Amritsar, Punjab, India",
      weather: "Hot summers, chilly winters",
      bestSeason: "October – March",
      disasters: "Historical conflicts, Covid restrictions",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Spiritually uplifting.", "⭐ 5 – Free community kitchen."],
      rating: "⭐ 4.9",
      tagline: "Peace, devotion, and golden beauty.",
    },
    {
      id: "manali",
      name: "Manali",
      location: "Himachal Pradesh, India",
      weather: "Cold winters, cool summers",
      bestSeason: "May – July, December – February",
      disasters: "Occasional landslides",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Perfect hill station.", "⭐ 4 – Crowded in peak season."],
      rating: "⭐ 4.8",
      tagline: "Snow, adventure, and mountain beauty.",
    },
    {
      id: "shimla",
      name: "Shimla",
      location: "Himachal Pradesh, India",
      weather: "Snowy winters, cool summers",
      bestSeason: "March – June, December – January",
      disasters: "Landslides, heavy snowfall",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Colonial charm.", "⭐ 4 – Gets crowded."],
      rating: "⭐ 4.5",
      tagline: "Queen of the hills with old-world charm.",
    },
    {
      id: "udaipur",
      name: "Udaipur",
      location: "Rajasthan, India",
      weather: "Hot summers, pleasant winters",
      bestSeason: "October – March",
      disasters: "Water shortages",
      img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Venice of the East.", "⭐ 4 – Lake rides are costly."],
      rating: "⭐ 4.7",
      tagline: "City of lakes with royal palaces.",
    },
    {
      id: "hampi",
      name: "Hampi",
      location: "Karnataka, India",
      weather: "Hot summers, mild winters",
      bestSeason: "October – March",
      disasters: "Ruins weather damage",
      img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Stunning ruins.", "⭐ 4 – Spread out area."],
      rating: "⭐ 4.8",
      tagline: "UNESCO world heritage with ancient temples.",
    },
    {
      id: "darjeeling",
      name: "Darjeeling",
      location: "West Bengal, India",
      weather: "Cool summers, cold winters",
      bestSeason: "March – May, September – December",
      disasters: "Landslides in monsoon",
      img: "https://images.unsplash.com/photo-1504609813440-554e64a8f005?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1504609813440-554e64a8f005?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Best tea in the world.", "⭐ 4 – Scenic toy train."],
      rating: "⭐ 4.8",
      tagline: "Tea gardens, Kanchenjunga views, and toy train.",
    },
    {
      id: "ellora",
      name: "Ellora Caves",
      location: "Maharashtra, India",
      weather: "Hot summers, mild winters",
      bestSeason: "October – March",
      disasters: "Weather erosion",
      img: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=900&q=80",
      imgLarge: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1600&q=80",
      reviews: ["⭐ 5 – Ancient caves.", "⭐ 4 – Needs better upkeep."],
      rating: "⭐ 4.7",
      tagline: "Rock-cut temples & UNESCO site.",
    },
  ];

  return (
    <main className="container my-5">
      <h2 id="places" className="mb-4">Popular Tourist Places</h2>

      {/* Places grid */}
      <div className="row g-4">
        {places.map((place) => (
          <div key={place.id} className="col-md-4">
            <div
              className="card shadow-sm"
              style={{
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                height: "420px", // Fixed card height
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 6px rgba(0,0,0,0.1)";
              }}
              onClick={() => openDetail(place)}
            >
              <img
                src={place.img}
                className="card-img-top"
                alt={place.name}
                style={{
                  height: "200px", // Fixed image height
                  objectFit: "cover",
                  borderTopLeftRadius: "0.375rem",
                  borderTopRightRadius: "0.375rem",
                }}
              />
              <div className="card-body" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">
                    {place.rating} | “{place.tagline}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeDetail && (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 1050,
            animation: "fadeIn 0.3s ease",
          }}
          onClick={closeDetail}
        >
          <div
            className="bg-white rounded p-4"
            style={{
              maxWidth: "1000px",
              width: "95%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
              animation: "scaleUp 0.3s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn btn-danger"
              style={{
                fontSize: "1.2rem",
                padding: "10px 20px",
                position: "absolute",
                top: "15px",
                right: "15px",
                borderRadius: "8px",
              }}
              onClick={closeDetail}
            >
              ✖ Close
            </button>
            <img
              src={activeDetail.imgLarge}
              className="img-fluid rounded mb-3"
              alt={activeDetail.name}
            />
            <h2>{activeDetail.name}</h2>
            <p><strong>Location:</strong> {activeDetail.location}</p>
            <p><strong>Weather:</strong> {activeDetail.weather}</p>
            <p><strong>Best Season:</strong> {activeDetail.bestSeason}</p>
            <p><strong>Last Disasters:</strong> {activeDetail.disasters}</p>
            <ul>
              {activeDetail.reviews.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}
      </style>
    </main>
  );
}

export default Hero;