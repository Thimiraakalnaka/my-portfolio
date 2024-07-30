import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faDiscord, faJs, faJava} from '@fortawesome/free-brands-svg-icons';
import Profile from '../Assest/profile.png';
import Profile2 from '../Assest/profile2.png';
import Js from '../Assest/Js.png';
import Video from '../Assest/fp.mp4'
import './style.css';
import Typed from 'typed.js';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faJsfiddle } from '@fortawesome/free-brands-svg-icons/faJsfiddle';
import ReactPlayer from 'react-player';




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

        <h2 className='mt-5'>Education</h2>
        <div className='col d-flex justify-content-center align-items-center' id='education' style={{padding:"35px 10%"}}>
          
          <div className='content text-start' style={{ padding:"0px 30px" ,borderLeft:"2px solid #1D6C81"}}>
            <div className='box'>
              <h4>2022 - 2024</h4>
              <h4>Undergraduate In BSc (Hons) Software Engineering </h4>
              <p>Cardiff Metropolitan University UK </p>
            </div>
            <div className='box'>
              <h4>2020 - 2022</h4>
              <h4>Higher Diploma In Computing and Software Engineering</h4>
              <p>International College Of Business & Technology </p>
            </div>
            <div className='box'>
              <h4>2019</h4>
              <h4>UGC Advanced Level Examination - Physical Science</h4>
              <p>Ananda Central College</p>
            </div>
          </div>
        </div>

        {/* <div className='skill'>
          <h2>Skill</h2>
          <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
            <img src={Js} alt='...'/>
            <h5>Python</h5>
            <a href='#'><FontAwesomeIcon icon={faJava} /></a>
            <h5>Python</h5>
            <a href='#'><FontAwesomeIcon icon={faJs} /></a>
            <h5>Python</h5>
          </div>
        </div> */}

        

          <div className='row' id='project'>
            <h2>Projects</h2>
            <div className='col'>
               <ReactPlayer controls={true} url={Video} height="500px" width="750px"/>
            </div>
            <div className='col text-start mt-5 lh-sm'>
              <h2>LPL Forecast</h2>
            <p>Lanka Premier League (LPL) cricket matches win probability predictor<br></br>
                <br/>
                This innovative project leverages advanced machine learning techniques to forecast match winning probability, providing valuable insights for sports enthusiasts, teams, and coaches.<br></br>
                <br/>
                I implemented these models using Python's libraries such as scikit-learn, numpy, pandas and evaluated their performance using accuracy. After thorough analysis, the Logistic Regression emerged as the most effective model for predicting LPL match outcomes. and also flask used for ML prediction backend.<br></br>
                <br/>
                The MERN stack (MongoDB, Express.js, React, and Node.js) was used to develop the user interface and backend of the user management, ensuring a seamless and responsive experience for users. This technology stack allows for robust data management and efficient real-time updates.</p>
            </div>
          </div> 

    </div>
  )
}
