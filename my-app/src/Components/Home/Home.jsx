import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="content">
        <img
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
          alt="avatar"
        />
        <h1>START FRAMEWORK</h1>

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

        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </section>
  );
}
