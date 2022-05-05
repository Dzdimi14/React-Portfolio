import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div ClassName="profile-details-name">
            <span className="primary-text">
              Hello World, Im <span className="highlighted-text">Dimiter</span>
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://www.linkedin.com/in/dimiter-zlatkov/">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                </div>
              </div>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Coder 🧑‍💻",
                    1000,
                    "Full Stack Developer 🧠",
                    1000,
                    "React/React Native Dev 👨‍💻",
                    1000,
                    "Researcher 👓📚",
                    1000,
                  ]}
                  wrapper='p'
                />
              </h1>
              <span className="profile-role-tagline">
                Full-Stack Web and Mobile developer with a knack for design.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a
              href="Resume-DimiterZlatkov.pdf"
              download="Dimiter Resume-DimiterZlatkov.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
