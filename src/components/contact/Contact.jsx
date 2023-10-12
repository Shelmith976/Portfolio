import React from 'react'
import './contact.css';
import {TfiEmail} from'react-icons/tfi'
import {RiMessengerLine} from'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
const Contact = () => {
  return (
<section id='contact'>
  <h5>Get in touch</h5>
  <h2>Contact Me</h2>
  <div className="container contact_container">
    <div className="contact_options">
      <article className='contact_option'>
        <TfiEmail/>
<h4>EMAIL</h4>
<h5>shelmithkimemia8@gmail.com</h5>
<a href="mailto:shelmithkimemia8@gmail.com" target='_blank'>Send Message</a>  
    </article>
    <article className='contact_option'>
      <RiMessengerLine/>
<h4>Messenger</h4>
<h5>shellytutorials</h5>
<a href="https://facebook.com" target='_blank'>Send Message</a>  
    </article>
    <article className='contact_option'>
      <ImWhatsapp/>
<h4>WhatsApp</h4>
<h5>0704283060</h5>
<a href="https://api.whatsapp.com/send?phone+254704283060" target='_blank'>Send Message</a>  
    </article>
    </div>
  </div>
</section>  )
}

export default Contact