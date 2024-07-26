import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';
import Profile from '../Assest/profile.png';
import Profile2 from '../Assest/profile2.png';
import './style.css';
import Typed from 'typed.js';
import { faDownload } from '@fortawesome/free-solid-svg-icons';




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
                <p>With the knowledge and skills, I have required, I like to work in a reputed organization where I could further enhance my creativity, knowledge and skills.</p>
                <div className='social-media text-start'>
                    <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href='#'><FontAwesomeIcon icon={faGithub} /></a>
                    <a href='#'><FontAwesomeIcon icon={faDiscord} /></a>
                </div>
                <button class="btn btn-primary" style={{background:"#045C73"}} type="submit">Download CV <FontAwesomeIcon icon={faDownload} /></button>
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
                <p>I am an optimistic & creative software engineer with a passion for technology and innovation. Skilled in HTML, CSS, and JavaScript, with experience in creating and maintaining responsive websites. And also, Experienced in the MERN stack (MongoDB, Express.js, React, Node.js) and am familiar with backend frameworks such as Spring Boot. Additionally, My background in data analysis and Machine Learning enhances my ability to tackle complex challenges. Experienced in incorporating version control tools like Git. Committed to continuous learning and applying best practices in web development. Seeking opportunities to contribute technical and grow as a software engineer in a collaborative development environment.</p>
            </div>

        </div>


    </div>
  )
}
