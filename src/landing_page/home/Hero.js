import React, { useState, useEffect } from "react";

function Hero() {
  const [activeDetail, setActiveDetail] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  // Hero slideshow images
  const images = [
    "https://th.bing.com/th/id/OIP.OXWG9qP0N9-wxZ4YJ0scWAHaEd?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80", // Taj Mahal
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80", // Goa Beach
   //  "https://images.unsplash.com/photo-1582632304860-1a6b9d0e2fe0?auto=format&fit=crop&w=1600&q=80", // Jaipur Palace
   //  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80", // Kerala Backwaters
   //  "https://images.unsplash.com/photo-1589307004399-2e4b7da9a2fb?auto=format&fit=crop&w=1600&q=80", // Ladakh Mountains
   //  "https://images.unsplash.com/photo-1563890210149-fd9d74d1e351?auto=format&fit=crop&w=1600&q=80",
    "https://th.bing.com/th/id/OIP.OXWG9qP0N9-wxZ4YJ0scWAHaEd?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"  // Varanasi Ghat
  ];

  // Auto change background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // every 2 sec
    return () => clearInterval(interval);
  }, [images.length]);

  const openDetail = (id) => setActiveDetail(id);
  const closeDetail = () => setActiveDetail(null);

  return (
    <div>
      {/* Inline CSS */}
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex; align-items: center; justify-content: center;
          z-index: 1050;
        }
        .modal-content {
          background: #fff; padding: 20px;
          border-radius: 12px;
          max-width: 700px; width: 90%;
          max-height: 90%; overflow-y: auto;
        }
        .place-card:hover {
          transform: translateY(-4px);
          transition: transform 0.2s;
        }
      `}</style>

      <section
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "340px",
          transition: "background-image 1s ease-in-out"
        }}
      >
        <h1 className="p-3 rounded" style={{ background: "rgba(0,0,0,0.5)" }}>
          Travel Safe, Explore Freely
        </h1>
      </section>

      {/* Places */}

      {/* Footer */}
     
    </div>
  );
}

export default Hero;

