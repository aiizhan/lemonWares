import React from 'react';
import { NavLink } from 'react-router-dom';
import Group from '../../assets/image/Group 6.png'
import Elements from '../../assets/image/Elements.png'
import spanel from '../../assets/svg/spanel.svg'
import frendly from '../../assets/svg/24x7frendly.svg'
import blazing from '../../assets/svg/blazing.svg'
import cli from '../../assets/svg/cli.svg'
import cloud from '../../assets/svg/cloud.svg'
import CryproLeam from '../../assets/svg/CryproLeam.svg'
import jpnl from '../../assets/svg/jpnl.svg'
import jpnl1 from '../../assets/svg/jpnl1.svg'
import jrang from '../../assets/svg/jrang.svg'
import korane from '../../assets/svg/Korane.svg'
import LeeveOn1 from '../../assets/svg/LeeveOn.svg'
import LeeveOn from '../../assets/svg/leeveOn1.svg'
import litespeed from '../../assets/svg/litespeed.svg'
import nadine from '../../assets/svg/nadine.svg'
import phone from '../../assets/svg/phone.svg'
import quote from '../../assets/svg/quote.svg'
import securedby from '../../assets/svg/securedby.svg'
import softaculous from '../../assets/svg/softaculous.svg'
import ssl from '../../assets/svg/ssl.svg'
import Uptime from '../../assets/svg/Uptime.svg'
import whatsapp from '../../assets/svg/whatsapp.svg'
import wordpress from '../../assets/svg/wordpress.svg'
import galochka from '../../assets/svg/galochka.svg'




import './Home.css'; // Предполагается, что ваш CSS будет находиться в этом файле
import Pricing from '../Prising/Prising';

const Home = () => {
    
  return (
    <main>
      <section className="hero flex  items-center md:justify-between py-12 px-4 md:px-8">
        <div>

        <div className="slider-nav1 flex flex-col md:flex-row md:space-x-4">
          <NavLink className="red-text-link" to="#">Hosting</NavLink>
          <NavLink className="red-text-link" to="#">Domain</NavLink>
          <NavLink className="red-text-link" to="#">SEO</NavLink>
          <NavLink className="red-text-link" to="#">Email</NavLink>
        </div>
        <div className="title md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Web Hosting for Your Website</h1>
          <p className="text-base md:text-lg mb-4 md:w-3/4">Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
          <div className="btn flex flex-col md:flex-row md:space-x-4">
            <button className="py-2 px-6 md:py-3 md:px-8 bg-white border border-gray-300 rounded-lg hover:bg-darkred hover:text-white hover:shadow-md transition duration-300">Create an Account</button>
            <button className="py-2 px-6 md:py-3 md:px-8 bg-white border border-gray-300 rounded-lg hover:bg-darkred hover:text-white hover:shadow-md transition duration-300">Choose your plan</button>
          </div>
        </div>
        </div>
        <div>
          <img src={Group} alt="Group" className="hidden md:block" />
        </div>
      </section>




      <section className="whyUs">
        <div className="whyUs1">
          <div className="truecloud">
            <h2>True Cloud Web Hosting</h2>
            <p>True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.</p>
          </div>
          <div className="logos">
            <img src={spanel} alt="" />
            <img src={securedby} alt="" />
            <img src={litespeed} alt="" />
            <img src={softaculous} alt="" />
            <img src={wordpress} alt="" />
            <img src={cloud}alt="" />
          </div>
        </div>
        <div className="benefits">
          <div className="benefits-item">
            <img src={Uptime} alt="" />
            <h1>99.9% Uptime</h1>
            <p>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
          </div>
          <div className="benefits-item">
            <img src={blazing} alt="" />
            <h1>Blazing Fast Web Hosting</h1>
            <p>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
          </div>
          <div className="benefits-item">
            <img src={ssl} alt="" />
            <h1>Free SSL Certificates</h1>
            <p>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
          </div>
          <div className="benefits-item">
            <img src={frendly} alt="" />
            <h1>24x7 Friendly Support</h1>
            <p>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-item">
          <h1>Ready to get started with Lemon Wares?</h1>
          <p>Choose the package that suits you</p>
          <div className="pricing-item1">
            <span>Monthly</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span>Yearly</span>
          </div>
        </div>
       <Pricing/>
      </section>



      <section className="stories">
        <div className="title-stories">
          <div className="title-stories1">
            <h2>Real Stories from Real Customers</h2>
            <p>Get inspired by these stories.</p>
          </div>
          <div className="title-stories-logo">
            <img src={CryproLeam} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna
              fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
            <h2>Floyd Miles</h2>
            <span>Vice President, CLI</span>
          </div>
        </div>
        <div>
          <div className="title-stories-logo1">
            <img src={jpnl1} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna
              fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
            <h2>Floyd Miles</h2>
            <span>Vice President, CLI</span>
          </div>

          <div className="title-stories-logo2">
            <img src={LeeveOn} alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
              venenatis, lectus magna
              fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
            <h2>Floyd Miles</h2>
            <span>Vice President, CLI</span>
          </div>
        </div>
      </section>

      <section>
        <div className="whyUs1">
          <div className="truecloud">
            <h2>We serve over 100 Nigerian Websites</h2>
            <p>Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
          </div>
          <div className="logos">
            <img src={jpnl} alt="" />
            <img src={korane} alt="" />
            <img src={ nadine} alt="" />
            <img src={ LeeveOn1} alt="" />
            <img src={jrang} alt="" />
            <img src={cli} alt="" />
          </div>
        </div>
      </section>
      <section className="getIn">
        <div className="withUs">
          <h2>We're here to make your website awesome.</h2>
          <button> <img src="" alt="" />Get in touch with us</button>
        </div>
      </section>
      
    </main>
  );
}

export default Home;
