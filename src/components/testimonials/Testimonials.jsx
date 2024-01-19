import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/DSC_0092.JPG'
// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  return (
<section id='testmonials'>
  {/* <h5>Review from clients</h5> */}
  <h2>Testmonials</h2>
  <Swiper className="container testmonials_container">
    <SwiperSlide className='testmonial'>
      <div className="client_avatar">
        <img src={AVTR1} alt="" />
      </div>
      <h5 className='client_name'>Shelmith Kimemia</h5>
      <small className='client_review'>
      <p>Offering Best services</p>
      </small>
    </SwiperSlide>
    <SwiperSlide className='testmonial'>
      <div className="client_avatar">
        <img src={AVTR1} alt="" />
      </div>
      <h5 className='client_name'>Ernedt civ</h5>
      <small className='client_review'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        consectetur mollitia perferendis, cum nobis amet ratione doloremque magnam?
      </small>
    </SwiperSlide>
    <SwiperSlide className='testmonial'>
      <div className="client_avatar">
        <img src={AVTR1} alt="" />
      </div>
      <h5 className='client_name'>Ernedt civ</h5>
      <small className='client_review'>
<p>Excellent work</p>    
  </small>
    </SwiperSlide>
    <SwiperSlide className='testmonial'>
      <div className="client_avatar">
        <img src={AVTR1} alt="" />
      </div>
      <h5 className='client_name'>Ernedt civ</h5>
      <small className='client_review'>
        <p>Good work!</p>
      </small>
    </SwiperSlide>
  </Swiper>
</section>  )
}

export default Testimonials