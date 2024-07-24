import React from 'react'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg border-body" style={{background:"#02252E"}} >
      <a className="navbar-brand fs-2 fw-bold ms-5 ps-5" style={{color:"#fff"}} href="#"><span>T</span>A</a>
      <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className="nav nav-pills ms-auto me-5 px-5">
            <li className="nav-item">
              <a className="nav-link text-white me-5"  href="#scrollspyHeading1">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-5" href="#scrollspyHeading2">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-5" href="#scrollspyHeading1">Skill</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-5" href="#scrollspyHeading2">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-5" href="#scrollspyHeading2">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white me-5" href="#scrollspyHeading2">Contact</a>
            </li>
    
          </ul>
          </div> 
      </nav> 
     
    </div>
  )
}
