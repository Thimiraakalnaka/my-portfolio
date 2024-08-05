import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className='text-white py-1' style={{background:"#034051"}}>
        
        <div className='row my-3 '> 
            <div className='col'>
            2024 Apply All rights reserved 
            </div>
            <div className='col'>
            Terms & Privacy Policy
            </div>
            <div className='col'>
                <a className='mx-5' href='https://www.linkedin.com/in/thimira-akalanka-194bbb275'>
                    <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white', fontSize: '24px' }} />
                </a>
                <a className='mx-5' href='https://github.com/Thimiraakalnaka'>
                    <FontAwesomeIcon icon={faGithub} style={{ color: 'white', fontSize: '24px' }} />
                </a>
                <a className='mx-5' href='#'>
                    <FontAwesomeIcon icon={faDiscord} style={{ color: 'white', fontSize: '24px' }} />
                </a>
            </div>
            
        </div>
       
    </footer>
    
    
  )
}
