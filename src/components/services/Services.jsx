import React from 'react'
import './services.css'
import {BiCheck} from'react-icons/bi'
const Services = () => {
  return (
<section id='services'>
  <h5>What I Offer</h5>
  <h2>Services</h2>
  <div className="container services_container">
<article className='service'>
  <div className="service_head">
    <h3>UI/UX Design</h3>
  </div>
  <ul className='service_list'>
    <li>
      <BiCheck className='service_list-icon'/>
      <p> I will do designing of websites
      </p>
      
    </li>
  </ul>
</article>
<article className='service'>
  <div className="service_head">
    <h3>content creation</h3>
  </div>
  <ul className='service_list'>
    <li>
      <BiCheck className='service_list-icon'/>
      <p>I do content creation
      </p>
      
    </li>
  </ul>
</article>
<article className='service'>
  <div className="service_head">
    <h3>Web develpoment</h3>
  </div>
  <ul className='service_list'>
    <li>
      <BiCheck className='service_list-icon'/>
      <p>I develop web applications 
      </p>
      
    </li>
    
  </ul>
</article>
  </div>
</section>  )
}

export default Services