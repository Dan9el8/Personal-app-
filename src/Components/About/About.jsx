import React from 'react'
import './About.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import about_profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className='about-para'>
                <p>I am an expirienced fullstack developer with over four years of expirience prestigius organizations, contributing to their success and growth.</p>
                <p>my passion for fullstack development is not only codibng but also in the enthusism and dedication I bring to each project.</p>
            </div>
           <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Node.js</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>React.js</p><hr style={{width:"50%"}} /></div>
            <div className="about-skill"><p>Django</p><hr style={{width:"50%"}} /></div>            
        </div>
      </div>
     </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPIRIENCE</p>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>  
  )
}

export default About
