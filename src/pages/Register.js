import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Person from '../assets/person.png';
import Pass from '../assets/password.png';
import Emailicon from '../assets/email.png';
import '../style/styleLogin.css';

const Register = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
          <div className="input">
            <img src={Person} alt="" />
            <input
              type="text"
              placeholder="Username"
              name="first_name"
              required
            />
          </div>

          <div className="input">
            <img src={Emailicon} alt="" />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              required
            />
          </div>

          <div className="input">
            <img src={Pass} alt="" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <div className="submit-container">
            <Link to="/">
              <button className="submit">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="submit gray">Log in</button>
            </Link>
          </div>
        
      </div>
    </div>
  );
};

export default Register;
