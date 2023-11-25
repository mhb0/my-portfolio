import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-solid fa-code fa-flip",
      title: "Multi Language Coding",
      desc: "Versatile coder fluent in multiple programming languages, navigating diverse tech stacks to bring innovative solutions to life.",
      active: false,
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles fa-bounce",
      title: "Web Design",
      desc: "Passionate web designer dedicated to crafting visually stunning and user-centric digital experiences that leave a lasting impact",
      active: true,
    },
    {
      icon: "fa-solid fa-mobile-screen fa-beat",
      title: "Mobile App Development",
      desc: "Enthusiastic mobile app developer committed to active learning and creating engaging applications focusing on user satisfaction.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>1</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h3>4</h3>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h3>6</h3>
              <p>Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
