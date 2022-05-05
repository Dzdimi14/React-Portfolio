import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'

import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)
    const SCREEN_CONSTANTS = {
      
      description: "I am a Vancouver based software developer who loves bringing ideas to life. I am a graduate of UBC where I closely studied the interaction between computing and cognition. I spend my time researching, designing, and building new ideas into applications. When I am not working I am either petting my cats, restoring my old car, or talking a walk in Vancouver's amazing forests.",
      highlights:{
        bullets: [
          "Full-Stack Development",
          "Front-end and mobile design",
          "React JS",
          "AI Research",
          "UX Research"
          
        ],
        heading: "Here are a few highlights:"
      }
    }
    const renderHighlight = () =>{
      return (
        SCREEN_CONSTANTS.highlights.bullets.map((value, i)=>(
          <div className='highlight' key={i}>
            <div className='highlight-blob'></div>
            <span>{value}</span>
          </div>
        ))
      )
    }


  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
        <div className='about-me-parent'>
            <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
            <div className='about-me-card'>
              <div className='about-me-profile'></div>
              <div className='about-me-details'>
                <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                <div className='about-me-highlights'>
                  <div className='highlight-heading'>
                    <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                  </div>
                  {renderHighlight()}
                </div>
                <div className='about-me-options'>
                <button className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>Hire Me</button>
            <a
              href="Resume-DimiterZlatkov.pdf"
              download="Dimiter Resume-DimiterZlatkov.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
