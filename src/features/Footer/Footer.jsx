import React from 'react'
import './footer.css'

import whiteLogo from '../../assets/image/Lemon Wares white Logo 1500px wide 1.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-infor">
        <div className='footer-infor1'>
          <img src={whiteLogo} alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
            lectus magna
            fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
        </div>
        <div className="footer-infor1">
          <h2>Service</h2>
          <p>Domain</p>
          <p>Shared Hosting</p>
          <p>Cloud Hosting</p>
          <p>Private Hosting</p>
        </div>
        <div className="footer-infor1">
          <h2>Hosting</h2>
          <p>Cheap Hosting</p>
          <p>Email Hosting</p>
          <p>Email Hosting</p>
          <p>Hosting Unlimited</p>
        </div>
        <div className="footer-infor1">
          <h2>Company</h2>
          <p>About</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-infor1">
          <h2>Help</h2>
          <p>FAQ</p>
          <p>Help support</p>
        </div>
      </div>
      <p>Built by Jeremiah with &#x1F90D; in Lagos. Copyright 2021</p>
    </footer>
  )
}

export default Footer