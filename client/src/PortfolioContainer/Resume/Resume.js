import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  
  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 50 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Talk To Alan",
      duration: { fromDate: "2020", toDate: "2020" },
      description:
        "A Voice activated newsreader application",
      subHeading:
        "Technologies Used:  React JS, ALAN AI",
    },
    {
      title: "AI-composed Music Bias Research",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Conducted my own university study on whether there is a human bias against AI-composed music",
      subHeading:
        "Technologies Used: HTML, CSS, Amazon Mturk",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of British Columbia, Vancouver"}
        subHeading={"Bachelor in Cognitive Systems"}
        fromDate={"2016"}
        toDate={"2021"}
      />
      

    
      <ResumeHeading
        heading={"High School "}
        subHeading={"Palo Alto College Prep"}
        fromDate={"2012"}
        toDate={"2016"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Metacreation Lab"}
          subHeading={"Research Assistant"}
          fromDate={"January"}
          toDate={"August 2021"}
          
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Designed and Led my own survey investigating whether there is a negative human bias against music which has been composed by an AI.
          </span>
        </div>
        <ResumeHeading
          heading={"Ivy Academy"}
          subHeading={"Web/Mobile Developer"}
          fromDate={"March"}
          toDate={"May 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Completed Contract to integrate multiple choice quiz app into website for a local tutoring company.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Designed and built full-stack application using Flutter
          </span>
          <br />
          <span className="resume-description-text">
            - Designed and implemented my own custom UI{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented third party SMTP using Sendgrid and a secure database using Firebase Firestore
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travel"
        description="I love getting out of my comfort zone and learning both about myself and the world around me."
      />
      <ResumeHeading
        heading="Nature"
        description="After a day spent inside coding, I love to enjoy all of the beauty Vancouver has to offer."
      />
      <ResumeHeading
        heading="Cars"
        description="I love to restore classic cars as my passion, I always get immense satisfaction after a job well done."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="Broken"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  

  
  return (
    <div className="resume-container screen-container fade-in"
      
      id={props.id || ""}
    >
      <div className="resume-container">
        <ScreenHeading title={"Resume"} subHeading={"My career so far"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
