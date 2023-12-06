import React from 'react'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import "../style/styleLogin.css"
import Person from '../assets/person.png';
import Pass from '../assets/password.png';



const Login= ()=> {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <Form className="inputs">
                <div className="input">
                    <img src={Person} alt="" />
                    <input type="text" placeholder="username or email" name="first_name" required/>
                </div>
                
                <div className="input">
                    <img src={Pass} alt="" />
                    <input type="password" placeholder="password" /> 
                    
                </div>
                <Link to="/forget-password"><label className="forgot-password">Forget password?</label></Link>
                <Link to="/loginadmin"><label className="forgot-password">Login as Admin?</label></Link>

                <div className="submit-container">
                    <Link to="/"><button className="submit" >Login</button></Link> 
                    <Link to="/register"><button className="submit gray" >Sign Up</button></Link>
                </div>
        
            </Form>
            
            
        </div>
    )
}

export default Login;