import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderOpenLine } from "react-icons/ri";



const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
        <div className="about-me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
          
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
            <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>7+ Years Experience</small>
            </article>

            <article className='about-card'>
            <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>

            <article className='about-card'>
            <RiFolderOpenLine className='about-icon' />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>

          <p>
          &emsp;&emsp;Seasoned Front-End Developer with full stack experience, proficient in both front-end and back-end aspects of web application development. Skilled in JavaScript ES6, React, Redux, NodeJS, MongoDB, and Express, with a strong understanding of APIs and modern frameworks. Experienced in Python-based Machine Learning and Database Engineering.
	<br />&emsp;&emsp;Adept in deploying advanced machine learning models for high-performance outcomes. Proven ability to deliver robust solutions in dynamic environments, excelling in client-side and server-side development for seamless system integration.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About