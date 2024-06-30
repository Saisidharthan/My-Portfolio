import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Footer.css';
const Footer = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className='footer'>
      <div className='footer-01'>
        <ul className="fot-menu">
          <li onClick={() => { setMenu("Home") }}>
            <Button
              component={Link}
              to="/"
              id='button1'
              className={menu === 'Home' ? 'active' : ''}
            >
              Home
            </Button>
            {menu === 'Home' ? <hr className="hr-line" /> : null}
          </li>
          <li onClick={() => { setMenu("About Me") }}>
            <Button
              component={Link}
              to="/Aboutme"
              id='button2'
              className={menu === 'About Me' ? 'active' : ''}
            >
              About Me
            </Button>
            {menu === 'About Me' ? <hr className="hr-line" /> : null}
          </li>
          <li onClick={() => { setMenu("Contact Me") }}>
            <Button
              component={Link}
              to="/Contactme"
              id='button3'
              className={menu === 'Contact Me' ? 'active' : ''}
            >
              Contact Me
            </Button>
            {menu === 'Contact Me' ? <hr className="hr-line" /> : null}
          </li>
          <li onClick={() => { setMenu("Experience") }}>
            <Button
              component={Link}
              to="/Experience"
              id='button4'
              className={menu === 'Experience' ? 'active' : ''}
            >
              Experience
            </Button>
            {menu === 'Experience' ? <hr className="hr-line" /> : null}
          </li>
        </ul>
      </div>
      <div className='footer-02'>
        <p id='footer-para'>© Done and Dusted at 2024 by Sai Sidharthan</p>
        <p id='footer-para-02'>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
