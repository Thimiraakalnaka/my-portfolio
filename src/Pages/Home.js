import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Profile from '../Assest/profile.png';
import Profile2 from '../Assest/profile2.png';
import './style.css';
import Typed from 'typed.js';




export default function Home() {
    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Software Engineer', 'Web Developer', 'Frontend Developer', 'Fullstack Developer'],
      typeSpeed: 50,
      backSpeed:50,
      backDelay:1000,
      loop:true,
    });

    return () => {
    
      typed.destroy();
    };
  }, []);
  return (
    <div className='body'>
        <div className='cover' id='cover'>
            <div className='cover-content text-start'>
                <h1>Hi There,</h1>
                <h1>I'm Thimira Akalanka</h1>
                <h4>And I'm a <span ref={el}> </span></h4>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                <div className='social-media text-start'>
                    <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='#'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='#'><FontAwesomeIcon icon={faDiscord} /></a>
                </div>
            </div>
            
            <div className='home-img'>
                <img src={Profile} alt="..."/>
            </div>
        </div>
        <div className='about' id='about'>
            <div className='about-img'>
                <img src={Profile2} alt='...'/>
            </div>
            <div className='about-content text-start'>
                <h2 className='heading'>About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles.</p>
                <a href='#' className='btn'>Read more</a>
            </div>

        </div>


    </div>
  )
}
