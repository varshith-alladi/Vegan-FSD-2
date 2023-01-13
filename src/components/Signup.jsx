import React, { useState, useEffect, useContext } from 'react';
import { signupValidate } from '../validateForm';
import { store } from "./App";
import { useNavigate } from 'react-router-dom';
import '../styles/login.modules.css';
import axios from 'axios';

function Signup(props) {
    const navigate = useNavigate()

    // All use state hooks

    const [users, setUsers] = useContext(store);

    // handling on change of inputs

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUsers({ ...users, [name]: value });
    }

    // Handling on submit

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/register",{
            fname:users.name,
            lname:users.lastname,
            email:users.email,
            password:users.password
        }).then(res=>{
         console.log(res.data)
         alert("registered successfully.")
         navigate('/Home')
        })
    }

    // Html form

    return (
        // <div>
        //     <div>
        //         <h1>Signup</h1>
        //     </div>
        //     <div>
        //         <form onSubmit={handleSubmit}>
        //             <label htmlFor="firstname">FirstName</label>
        //             <input value={users.firstname} onChange={handleInput} type="text" placeholder="Enter your first name"  name="firstname" id="firstname" required />

        //             <label htmlFor="lastname">FirstName</label>
        //             <input value={users.lastname} onChange={handleInput} type="text" placeholder="Enter your last name"  name="lastname" id="lastname" required />

        //             <label htmlFor="email">email</label>
        //             <input value={users.email} onChange={handleInput} type="email" placeholder="Enter your email"  name="email" id="email" required />

        //             <label htmlFor="password">password</label>
        //             <input value={users.password} onChange={handleInput} type="password" placeholder="***********"  name="password" id="password" required />

        //             <label htmlFor="confirmPassword">Confirm Password</label>
        //             <input value={users.confirmPassword} onChange={handleInput} type="password" placeholder="***********"  name="confirmPassword" id="confirmPassword" required />

        //             <button type="submit">Signup</button>
        //         </form>
        //     </div>
        //     <button onClick={() => props.onFormSwitch("Login")} >Already have an account ? Login here.</button>
        // </div>


        <div className='loginbody'>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit} className="signup-1">
                            <div className="signup__field">
                                <i className="signup__icon fas fa-user"></i>
                                <input className='login__input' value={users.firstname} onChange={handleInput} type="text" placeholder="Enter your first name" name="firstname" id="firstname" required />
                            </div>
                            <div className="signup__field">
                                <i className="signup__icon fas fa-user"></i>
                                <input className='login__input' value={users.lastname} onChange={handleInput} type="text" placeholder="Enter your last name" name="lastname" id="lastname" required />
                            </div>

                            <div className="signup__field">
                                <i className="signup__icon fas fa-envelope"></i>
                                <input className='login__input' value={users.email} onChange={handleInput} type="email" placeholder="Enter your email" name="email" id="email" required />
                            </div>

                            <div className="signup__field">
                                <i className="signup__icon fas fa-lock"></i>
                                <input className='login__input' value={users.password} onChange={handleInput} type="password" placeholder="password" name="password" id="password" required />
                            </div>

                            <div className="signup__field">
                                <i className="signup__icon fas fa-lock"></i>
                                <input className='login__input' value={users.confirmPassword} onChange={handleInput} type="password" placeholder="confirm password" name="confirmPassword" id="confirmPassword" required />
                            </div>

                            <button type="submit" className="button login__submit">
                                <span className="button__text">Sign UP Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <button className='signup' onClick={() => props.onFormSwitch("Login")} >Already have an account ? <span className='span-signup'>Login here</span>.</button>
                        {/* <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div> */}
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Signup;