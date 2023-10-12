import React from 'react'
import './portfolio.css'
 import IMG from '../../assets/portfolio.jpg'
// //  import IMG from '../../assets/portfolio.jpg'
//  import IMG from '../../assets/portfolio.jpg'
//  import IMG from '../../assets/portfolio.jpg'
//  import IMG from '../../assets/portfolio.jpg'
//  import IMG from '../../assets/portfolio.jpg'

const Portfolio = () => { 
  return (
<section id='portfolio'>
  <h5>Recent Work</h5>
  <h2>Portfolio</h2>
  <div className="container portfolio_container">
    <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <img src={IMG} alt="" />
       </div>
        <h3>This is a Portfolio item Title</h3>
       <div className="portfolio_item-cta">
       <a href="https://github.com" className='btn'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
       </div>
    </article>
    <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <img src={IMG} alt="" />
       </div>
        <h3>This is a Portfolio item Title</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>
    <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <img src={IMG} alt="" />
       </div>
        <h3>This is a Portfolio item Title</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
    </article>
    {/* <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <img src={IMG} alt="" />
       </div>
        <h3>This is a Portfolio item Title</h3>
        <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
    </article> */}
    {/* <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <img src={IMG} alt="" />
       </div>
        <h3>This is a Portfolio item Title</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
    </article> */}
    {/* <article className='portfolio_item'>
       <div className="portfolio_item-image">
        <img src={IMG} alt="" />
       </div>
        <h3>This is a Portfolio item Title</h3>
        <div className="portfolio_item-cta">
        <a href="https://github.com" className='btn'>Github</a>
        <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
        </div>
    </article> */}
    
  </div>
  </section>  )
}

export default Portfolio