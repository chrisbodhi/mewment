import React from 'react';
import { Link } from 'react-router';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/careers">Careers</Link></li>
        <li>
          <a
            href="https://img0.etsystatic.com/040/0/5919483/il_fullxfull.554425246_afjn.jpg"
            alt="j/k! I won't be upset if you move here."
            target="_new"
          >
            Made with 😺 in ATX
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
