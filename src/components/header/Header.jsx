import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/pp.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
<header>
  <div className="container header_container">
    <h5>Hello i'm</h5>
    <h1>Shelmith Wambui</h1>
    <h5 className="text-light">Fullstack Developer</h5>
    <CTA/>
    <HeaderSocials/>
    <div className="me">
      <img src={ME} alt="" />
    </div>
    {/* <a href="contacts"className='scroll_down'>Scroll Down</a> */}
  </div>
</header>  )
}

export default Header