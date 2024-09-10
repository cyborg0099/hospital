import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faStethoscope, faCalendar, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = ({ role, isAuthenticated }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <FontAwesomeIcon icon={faHome} /> Hospital Management System
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <FontAwesomeIcon icon={faHome} /> Home <span className="sr-only">(current)</span>
        </Link>
      </li>
      {role === 'admin' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/patients">
              <FontAwesomeIcon icon={faUser} /> Patients
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/doctors">
              <FontAwesomeIcon icon={faStethoscope} /> Doctors
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/appointments">
              <FontAwesomeIcon icon={faCalendar} /> Appointments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/billing">
              <FontAwesomeIcon icon={faMoneyBill} /> Billing
            </Link>
          </li>
        </>
      )}
      {role === 'doctor' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/appointments">
              <FontAwesomeIcon icon={faCalendar} /> Appointments
            </Link>
          </li>
        </>
      )}
      {role === 'patient' && (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/appointments">
              <FontAwesomeIcon icon={faCalendar} /> Appointments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/billing">
              <FontAwesomeIcon icon={faMoneyBill} /> Billing
            </Link>
          </li>
        </>
      )}
      {!isAuthenticated ? (
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            <FontAwesomeIcon icon={faUser} /> Signup
          </Link>
        </li>
      ) : (
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <FontAwesomeIcon icon={faUser} /> Login
          </Link>
        </li>
      )}
    </ul>
  </div>
</nav>
  );
};

export default NavigationBar;