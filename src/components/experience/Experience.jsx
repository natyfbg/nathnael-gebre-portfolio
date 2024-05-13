import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from "react-icons/bs";


const Experience = () => {
  return (
    <section id="experienve">
      <h5>These Are Some of My Skills</h5>
      <h2>My Experience</h2>


      <div className="container experience-container">
        <div className="experience-frontend">
          <h1>Frontend Development</h1>
          <div className="experience-content">
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>CSS</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>React</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>TypeScript</h4>
            <small className="text-light">Competent</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>Tailwind</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        
        <div className="experience-backend">
        <h1>Backend Development</h1>
          <div className="experience-content">
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon"  />
            <div>
            <h4>NodeJS</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>ExpressJs</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>Python</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
            <article className="experience-details">
            <BsPatchCheckFill className="experience-details-icon" />
            <div>
            <h4>REST API</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience