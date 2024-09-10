import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//importing icons that are used
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 contact-info">
            <h4>Contact Us</h4>
            <p>Email: <a href="mailto:info@hospital.com">info@hospital.com</a></p>
            <p>Phone: <a href="tel:(123) 456-7890">(123) 456-7890</a></p>
            <p>Address: 123 Health St, Wellness City</p>
          </div>
          <div className="col-md-4 social-icons">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#" target="_blank"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">&copy; 2024 Hospital Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;