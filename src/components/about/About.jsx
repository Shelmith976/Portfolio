import React from 'react'

import './about.css'
import ME from '../../assets/pp.png'
import vid from "../../assets/aboutmevideo.mp4"


import { BiAward } from 'react-icons/bi'
import { RiFoldersLine } from 'react-icons/ri'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know me</h5>
      <h2>About Me</h2>
      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BiAward className='about_icon' />
              <h5>Experience</h5>
              <small>2+ years freelancing Experience</small>
            </article>
            <article className='about_card'>
              <AiOutlineUsergroupAdd className='about_icon' />
              <h5>CLients</h5>
              <small>20+ worldwide</small>
            </article>
            <article className='about_card'>
              <RiFoldersLine className='about_icon' />
              <h5>Projects</h5>
              <small>Completed projects
                20+ projects</small>
            </article>
          </div>
          <p>I'm Shelmith Wambui Kimemia, 21 years old student at Dedan Kimathi University Of Technology pursuing bachelor
            of Science in Computer Science, In my final Year of studies.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <article className='portfolio_item'>
            <video width="640" height="300" controls>
              <source src={vid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>Video About Me</h3>
            <div className="portfolio_item-cta">
            </div>
          </article>    </div>
      </div>
    </section>
  )
}

export default About