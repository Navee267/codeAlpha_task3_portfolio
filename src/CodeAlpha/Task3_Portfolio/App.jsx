import React, { useState } from 'react'
import navbar from "./nav.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faGamepad, faL, faLocation, faLocationDot, faMailBulk, faMusic, faPhone, faTerminal, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myimage from "./WhatsApp Image 2024-11-04 at 20.05.14_1d737436.jpg";
import aboutimg from "./WhatsApp Image 2024-11-04 at 20.06.56_f84cbf05.jpg";
import img2 from "./WhatsApp Image 2024-11-08 at 19.42.01_d4c16ef2.jpg";
import qrcode from "./projects/qrcode.png";
import bmi from "./projects/BMI.png";
import weather from "./projects/weather.png";
import password from "./projects/passwordgen.png";
import gallery from "./projects/imagegallery.png";            //Task 3 Portfolio Using React Js And CSS
import currency from "./projects/currencyconverter.png";
import calc from "./projects/calculator.png";

import codsoft from "./certificates/codsoft_java_certificate_page-0001.jpg";
import hackerrank from "./certificates/Screenshot 2024-10-11 111655.png";
import simplyjs from "./certificates/Screenshot 2024-10-11 174916.png";
import great from "./certificates/Screenshot 2024-11-09 172535.png";
import simplyweb from "./certificates/Screenshot 2024-11-09 172943.png";
import testing from "./certificates/testing.png";

import ScrollAnimation from 'react-animate-on-scroll';
export const App = () => {
  const [openNav, setOpenNav] = useState(false);
  const [img, setImg] = useState(myimage);
  const skills = [
    { skill: "HTML", level: "Intermediate", percentage: '85%' },
    { skill: "CSS", level: "Intermediate", percentage: '80%' },
    { skill: "React", level: "Beginner", percentage: '65%' },
    { skill: "JavaScript", level: "Intermediate", percentage: '75%' },
    { skill: "Java", level: "Intermediate", percentage: '70%' },
    { skill: "MySQL", level: "Beginner", percentage: '60%' }
  ];

  const changeImage = () => {
    setImg(!img);
  }

  const openMenu = () => {
    setOpenNav(!openNav);
  }

  const refresh = () => {
    window.location.reload();
  }
  return (
    <>
      <div className='container'>
        <div className="homepage" id='home'>

          <div className="design"></div>
          <nav className='main-nav'>
            <h1 onClick={refresh}>N.Naveen <span>Kumar</span></h1>
            <ul>
              {
                navbar.map((item, index) => (
                  <li key={index}><a href={item.link} key={index}>{item.name}</a></li>
                ))
              }
            </ul>
            <p className='menu' onClick={openMenu}> <FontAwesomeIcon icon={faBars} /></p>
          </nav>
          <div className="mobile-nav" style={{ right: openNav ? "0" : "-300px" }}>
            <ul>
              {
                navbar.map((item, index) => (
                  <li key={index}><a href={item.link} key={index}>{item.name}</a></li>
                ))
              }
            </ul>
          </div>
          <div className="content">
            <div className="div1">
              <h3> WE DESIGN & BUILD BRANDS</h3>
              <h1>
                Hi,Iam <span>Naveen</span> This Is My Favorite Work.
              </h1>
              <div className="buttons">
                <button>Hire Me</button>
                <button>Learn More</button>
              </div>
            </div>
            <div className="div2">
              <div className='main-img'>
                <img onClick={changeImage} src={myimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="secondpage" id='about'>
          <div className="about-img">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div>
                <img src={img2} alt="" />
              </div>
            </ScrollAnimation>

          </div>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} animateOut='fadeOut'>
            <div className="about-content">
              <h3>My Intro</h3>
              <h1>About Me</h1>
              <p>Hello everyone, I am Naveen Kumar, an ECE student at Einstein College of Engineering and an aspiring frontend developer. I thrive in innovative team environments and am committed to delivering excellence through collaboration and dedication.</p>
              <div className="form">
                <label htmlFor="">Name : <h3 style={{ display: "inline" }}>Naveen Kumar N</h3></label>
                <label htmlFor="">DOB : <h3 style={{ display: "inline" }}>26-07-2005</h3></label>

                <label htmlFor="">Address : <h3 style={{ display: "inline" }}>Tenkasi at TamilNadu</h3></label>

                <label htmlFor="">Pin Code : <h3 style={{ display: "inline" }}>627 808</h3></label>

                <label htmlFor="">Email : <h3 style={{ display: "inline" }}>navinraja0681@gmail.com</h3></label>

                <label htmlFor="">Phone : <h3 style={{ display: "inline" }}>8098670681</h3></label>

                <div className="fav">
                  <span>| <FontAwesomeIcon icon={faVideo} /> Anime</span>
                  <span>| <FontAwesomeIcon icon={faMusic} /> Music</span>
                  <span>| <FontAwesomeIcon icon={faGamepad} />Games</span>
                  <span>| <FontAwesomeIcon icon={faTerminal} />Coding</span>
                </div>

              </div>
            </div>
          </ScrollAnimation>
        </div>
        <hr />
        <div className="thirdpage" id='skills'>
          <h3>SKILLS</h3>
          <h1>My Skills</h1>

          <ScrollAnimation animateIn="fadeIn" animateOnce={true} animateOut='fadeOut'>
            <div className="skills">
              {
                skills.map((item, index) => (
                  <div className='box' key={index}>
                    <h2 key={index}>{item.skill}</h2>
                    <div className="circle" key={index}><h3 key={index}>{item.percentage}</h3></div>
                    <h3 key={index}>{item.level}</h3>
                  </div>
                ))
              }
            </div>
          </ScrollAnimation>


        </div>
        <hr />
        <div className="fourthpage" id='projects'>
          <h3>
            Accomplishments
          </h3>
          <h1>Our Projects</h1>

          <div className="projects">
            
              <div className="box">
                <a href="#"><img src="https://flux-image.com/_next/image?url=https%3A%2F%2Fai.flux-image.com%2Fflux%2Fc582ec5d-a5cc-4fad-9284-23db6578147b.jpg&w=3840&q=75" alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={qrcode} alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={bmi} alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={weather} alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={password} alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={gallery} alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={currency} alt="" /></a>
              </div>
              <div className="box">
                <a href="#"><img src={calc} alt="" /></a>
              </div>
          </div>
        </div>
        <hr />
        <div className="fifthpage" id='certifications'>
          <h3> Certified In</h3>
          <h1>Certifications</h1>

          <div className="certifications">
            <div className="box">
              <a href="https://drive.google.com/file/d/1Dnp_5f6uLiqgdvMGxFLq4HanLRr3pDzJ/view"><img src={codsoft} alt="" /></a>
            </div>
            <div className="box">
              <a href="https://olympus.mygreatlearning.com/courses/12385/certificate?pb_id=581"><img src={hackerrank} alt="" /></a>
            </div>
            <div className="box">
              <a href="https://simpli-web.app.link/e/aStHU9cQnOb"><img src={simplyjs} alt="" /></a>
            </div>
            <div className="box">
              <a href="https://simpli-web.app.link/e/EjYohgfQnOb"><img src={great} alt="" /></a>
            </div>
            <div className="box">
              <a href="https://www.hackerrank.com/certificates/26822ebc74d0"><img src={simplyweb} alt="" /></a>
            </div>
            <div className="box">
              <a href="https://learntube.ai/pricing"><img src={testing} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="sixthpage" id='contact'>
          <h3>CONTACT US</h3>
          <h1>Have A Project ?</h1>
          <div className='contact'>
            <div className='form'>
              <input type="text" placeholder='Your Name ' />
              <input type="email" placeholder='Your Email ' />
              <input type="text" placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
              <button>Send</button>
            </div>
            <div className="socialmedia">
              <div className="div1">
                <h2> <span><FontAwesomeIcon icon={faLocationDot} /> </span> Address</h2>
                <p>Tenkasi At TamilNadu</p>
              </div>
              <div className="div2">
                <h2> <span><FontAwesomeIcon icon={faPhone} /> </span> Phone</h2>
                <p>8098670681</p>
              </div>
              <div className="div3">
                <h2> <span><FontAwesomeIcon icon={faEnvelope} /> </span> Email</h2>
                <p>navinraja0681@gmail.com</p>
              </div>
              <div className="div4">
                <h2> <span><FontAwesomeIcon icon={faLinkedin} /> </span> LinkedIn</h2>
                <a href="www.linkedin.com/in/n-naveen-kumar-b6a74a299">Click Here...</a>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright ©2024 All rights reserved | Designed By <a href="www.linkedin.com/in/n-naveen-kumar-b6a74a299">N.Naveen </a></p>
        </footer>
      </div>
    </>
  )
};

export default App;