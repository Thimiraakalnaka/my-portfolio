import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons';
import Profile from '../Assest/profile.png';
import Profile2 from '../Assest/profile2.png';
import Js from '../Assest/js.png';
import Git from '../Assest/git.png'
import Python from '../Assest/python.png'
import Java from '../Assest/java.png'
import Figma from '../Assest/Figma-01.png'
import Html from '../Assest/HTML5.png'
import Css from '../Assest/css.png'
import Mysql from '../Assest/sql_logo.png'
import Springboot from '../Assest/sb.png'
import Boostrap from '../Assest/bs.png'
import Reacticon from '../Assest/react.png'
import Mongodbicon from '../Assest/mdb.png'
import Video from '../Assest/fp.mp4'
import './style.css';
import Typed from 'typed.js';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';
import Swal from 'sweetalert2'




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

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cacc4ddc-d8a1-4af2-8718-c6a187434f67");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Succesfuly send the message!",
        icon: "success"
      });
    }
  };


  return (
    <div className='body'>
        <div className="container-fluid" id="cover">
            <div className="row align-items-center">
                <div className="col-8 text-start" id='cover'>
                    <h1>Hi There,</h1>
                    <h1>I'm Thimira Akalanka</h1>
                    <h4>And I'm a <span ref={el}></span></h4>
                    <p>With the knowledge and skills I have acquired, I would like to work in a reputed organization where I could further enhance my creativity, knowledge, and skills.</p>
                    <div className="social-media text-start">
                        <a href="https://www.linkedin.com/in/thimira-akalanka-194bbb275" className="me-3">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://github.com/Thimiraakalnaka" className="me-3">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                    </div>
                    <button className="btn btn-primary mt-3 mb-5" style={{ background: "#045C73" }} type="button">
                        Download CV <FontAwesomeIcon icon={faDownload} />
                    </button>
                </div>
                <div className="d-grid col-4 text-center">
                    <img src={Profile} alt="..." className="img-fluid" />
                </div>
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


        <h2>Skill</h2>
        <div className='container ' id='skill'>
        <div className='box'>
            <div className='skill-img'>
              <img src={Html} alt='...'/>
            </div>
              <h5>HTML</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Css} alt='...'/>
            </div>
              <h5>CSS</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Js} alt='...'/>
            </div>
              <h5>JavaScript</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Java} alt='...'/>
            </div>
              <h5>Java</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Python} alt='...'/>
            </div>
              <h5>Python</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Mysql} alt='...'/>
            </div>
              <h5>Mysql</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Mongodbicon} alt='...'/>
            </div>
              <h5>MongoDB</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Git} alt='...'/>
            </div>
              <h5>Git</h5>
          </div>
  
          <div className='box'>
            <div className='skill-img'>
              <img src={Figma} alt='...'/>
            </div>
              <h5>Figma</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Boostrap} alt='...'/>
            </div>
              <h5>Boostrap</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Reacticon} alt='...'/>
            </div>
              <h5>React</h5>
          </div>
          <div className='box'>
            <div className='skill-img'>
              <img src={Springboot} alt='...'/>
            </div>
              <h5>Springboot</h5>
          </div>
          
          
          
        </div>

        

 
        <h2 className='title mt-5'><span>My </span>Projects</h2>
        <div className="container mt-2" id="project">
            <div className="row">
                <div className="col-md-6">
                    <div className="player-wrapper">
                        <ReactPlayer
                            className="react-player"
                            controls={true}
                            url={Video}
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
                <div className="col-md-6 text-start mt-2 lh-sm">
                    <h2>LPL Forecast</h2>
                    <p>
                        Lanka Premier League (LPL) cricket matches win probability predictor
                        <br />
                        <br />
                        This innovative project leverages advanced machine learning techniques to forecast match winning probability, providing valuable insights for sports enthusiasts, teams, and coaches.
                        <br />
                        <br />
                        I implemented these models using Python's libraries such as scikit-learn, numpy, pandas and evaluated their performance using accuracy. After thorough analysis, the Logistic Regression emerged as the most effective model for predicting LPL match outcomes. Flask was used for the ML prediction backend.
                        <br />
                        <br />
                        The MERN stack (MongoDB, Express.js, React, and Node.js) was used to develop the user interface and backend of the user management, ensuring a seamless and responsive experience for users. This technology stack allows for robust data management and efficient real-time updates.
                    </p>
                </div>
            </div>
        </div>

        <div className='contact px-5 py-2 text-start ' id='contact'>
          <h3>Contact</h3>
          <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label ">Name</label>
                <input type="text" className="form-control" name='name' required/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label ">Email address</label>
                <input type="email" className="form-control"placeholder="name@example.com" name='email'/>
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea name='message' className="form-control" rows="6"></textarea>
              </div>
              <div className='d-grid my-3'>
                <button type="submit" className="btn btn-info text-white">Submit</button>
              </div>
            </form>  
        </div>
      

    </div>
  )
}
