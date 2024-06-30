import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Logo from '../Assets/LOGO.ico';
import './NavBar.css';

const NavBar = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt='img' className="img" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("Home") }}>
          <Button
            component={Link}
            to="/"
            id='but1'
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
            id='but2'
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
            id='but3'
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
            id='but4'
            className={menu === 'Experience' ? 'active' : ''}
          >
            Experience
          </Button>
          {menu === 'Experience' ? <hr className="hr-line" /> : null}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
