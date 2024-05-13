import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'A website that us built for Personal trainers to help guide their clients reach their fitness goal',
    github: 'https://github.com/natyfbg/personal-trainer-portfolio',
    demo: 'https://dribbble.com/shots/24105421-NattyFitness'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Fitness store for home workout equipment',
    github: 'https://github.com/natyfbg/ecommerce-website',
    demo: 'https://dribbble.com/shots/24105469-E-commerce-Store'
  },
  {
    id: 3,
    image: IMG3,
    title: 'A website that us built for Personal trainers to help guide their clients reach their fitness goal',
    github: 'https://github.com/natyfbg',
    demo: 'dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Garage-io, the ultimate online platform designed exclusively for students seeking opportunities',
    github: 'https://github.com/natyfbg',
    demo: 'dribble.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Tank Game,Command and Conquer Welcome to Tank Warfare, an exhilarating tank battle game designed to challenge your strategic thinking and combat skills',
    github: 'https://github.com/natyfbg',
    demo: 'dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'WordBars, Python application for refining and reordering Google search results',
    github: 'https://github.com/natyfbg',
    demo: 'dribble.com'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio-container">
        {
            data.map(({id, image, title, github, demo}) => {
              return(
                <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary'>Demo</a>
              </div>
          </article>
            )
          })
        }
        
<div>
          {/* <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
            <div className="portfolio-item-cta">
            <a href="https://github.com/natyfbg/nathnael-gebre-portfolio" className='btn'>Github</a>
            <a href="https://dribbble.com/nathnaelgebre" className='btn btn-primary'>Demo</a>
            </div>
        </article>
        
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
            <div className="portfolio-item-cta">
            <a href="https://github.com/natyfbg/nathnael-gebre-portfolio" className='btn'>Github</a>
            <a href="https://dribbble.com/nathnaelgebre" className='btn btn-primary'>Demo</a>
            </div>
        </article>
        
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
            <div className="portfolio-item-cta">
            <a href="https://github.com/natyfbg/nathnael-gebre-portfolio" className='btn'>Github</a>
            <a href="https://dribbble.com/nathnaelgebre" className='btn btn-primary'>Demo</a>
            </div>
        </article>
        
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
            <div className="portfolio-item-cta">
            <a href="https://github.com/natyfbg/nathnael-gebre-portfolio" className='btn'>Github</a>
            <a href="https://dribbble.com/nathnaelgebre" className='btn btn-primary'>Demo</a>
            </div>
        </article>
        
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio title</h3>
            <div className="portfolio-item-cta">
            <a href="https://github.com/natyfbg/nathnael-gebre-portfolio" className='btn'>Github</a>
            <a href="https://dribbble.com/nathnaelgebre" className='btn btn-primary'>Demo</a>
            </div>
        </article> */}
</div>

      </div>
    </section>
  )
}

export default Portfolio