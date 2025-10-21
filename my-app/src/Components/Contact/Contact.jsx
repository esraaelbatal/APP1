import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1>CONTACT SECTION</h1>

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

      <form className="contact-form">
        <input type="text" placeholder="User Name" />
        <input type="number" placeholder="User Age" />
        <input type="email" placeholder="User Email" />
        <input type="password" placeholder="User Password" />
        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}
