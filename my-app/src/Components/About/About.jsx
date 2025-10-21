import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <h1>ABOUT COMPONENT</h1>

      <div className="d-flex align-items-center justify-content-center my-3">
        <div
          className="me-3"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
        ></div>

        <i
          className="bi bi-star-fill"
          style={{
            color: "white",
            fontSize: "22px",
          }}
        ></i>

        <div
          className="ms-3"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "white",
            borderRadius: "3px",
          }}
        ></div>
      </div>

      <div className="about-text">
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </section>
  );
}
