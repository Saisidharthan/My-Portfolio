import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn,faGithub}  from '@fortawesome/free-brands-svg-icons'
import mail from '../Assets/skills/mail.png';
import loc from '../Assets/skills/loc.png';
const Contact = () => {
  return (
    <div className='Contact-main'>
        <div className='Contact-0'>
            <h2>CONTACT INFO</h2>
            <div className='Contact-0-1'>
                <div className='cont-img'>
                    <img src={mail} alt='mail'></img>
                </div>
                <div className='cont-content'>
                    <h3>Mail me</h3>
                    <h1>saisidharthan17@gmail.com</h1>
                </div>
            </div>
            <div className='Contact-0-1'>
                <div className='cont-img'>
                    <img src={loc} alt='location'></img>
                </div>
                <div className='cont-content'>
                    <h3>Location</h3>
                    <h1>Coimbatore ,TamilNadu</h1>
                </div>
            </div>
            <h2>SOCIAL INFOS</h2>
            <div className='contact-icons'>
                <a href='https://www.instagram.com/_sai_sidharth_17?igsh=MTZ5enYxNnNmNmFveA==' className='con-icon'>
                    <FontAwesomeIcon icon={faInstagram} className='icon-style' />
                </a>
                <a href='https://www.linkedin.com/in/saisidharthan/' className='con-icon'>
                    <FontAwesomeIcon icon={faLinkedinIn} className='icon-style' />
                </a>
                <a href='https://github.com/Saisidharthan' className='con-icon'>
                    <FontAwesomeIcon icon={faGithub} className='icon-style' />
                </a>
            </div>
        </div>
        <div className='Contact-1'>
        <h1>Let's Connct <span class="contact-1-high">Together</span> </h1>
            <button>BOOK AN APPOINTMENT</button>
        </div>
    </div>
  )
}

export default Contact