import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='text-white pt-1' style={{background:"#034051"}}>
        
        <div className='row mt-5 '> 
            <div className='col'>
            2024 Apply All rights reserved 
            </div>
            <div className='col'>
            Terms & Privacy Policy
            </div>
            <div className='col'  style={{width:"4rem", height:"4rem"}}>
                    <a className='mx-5' href='#'><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className='mx-5' href='#'><FontAwesomeIcon icon={faGithub} /></a>
                    <a className='mx-5' href='#'><FontAwesomeIcon icon={faDiscord} /></a>
                
            </div>
            
        </div>
       
    </footer>
    
  )
}
