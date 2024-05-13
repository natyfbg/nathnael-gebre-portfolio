import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";


const Services = () => {
  return (
    <section id="services">
      <h5>How I Can be of Help</h5>
      <div className="container services-container">

        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
          </ul>
        </article>
        
        {/* End OF UI/UX */}


        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
          </ul>
        </article>
        
        {/* End OF Web Development */}


        <article className="service">
          <div className="service-head">
            <h3>Machine Learning Engineer</h3>
          </div>
          <ul className="service-list">
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
            <li className='no-bullets'>
              <FaCheck className='service-list-icon' />
              <p>I am able to design Incredible UI</p>
            </li>
          </ul>
        </article>
        
        {/* End OF Machine Learning Engineer*/}


      </div>
    </section>
  )
}

export default Services