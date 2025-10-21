import React, { useState } from "react";
import "./Portfolio.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio-title">PORTFOLIO COMPONENT</h2>

      <div className="d-flex align-items-center justify-content-center my-3">
        <div
          className="me-3"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#2c3e50",
            borderRadius: "3px",
          }}
        ></div>

        <i
          className="bi bi-star-fill"
          style={{
            color: "#2c3e50",
            fontSize: "22px",
          }}
        ></i>

        <div
          className="ms-3"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#2c3e50",
            borderRadius: "3px",
          }}
        ></div>
      </div>

      <div className="portfolio-grid">
        {images.map((src, index) => (
          <div
            key={index}
            className="portfolio-item"
            onClick={() => setSelectedImage(src)}
          >
            <img src={src} alt={`Portfolio ${index + 1}`} />
            <div className="overlay">
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Zoomed" />
            <i
              className="fa-solid fa-xmark close-btn"
              onClick={() => setSelectedImage(null)}
            ></i>
          </div>
        </div>
      )}
    </section>
  );
}
