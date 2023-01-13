import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import { store } from './App';
import '../styles/login.modules.css';

function EditUserDetails() {

    const [users, setUsers] = useContext(store);

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUsers({ ...users, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/user-profile');
    }

    const navigate = useNavigate();
    const navigate1 = useNavigate();

    return (
        // <div className="editbody">
        //     <Navbar />
        //     <form onSubmit={handleSubmit}>
        //         <label htmlFor="firstname">FirstName</label>
        //         <input value={users.firstname} onChange={handleInput} type="text" placeholder="Enter first name" autoComplete="off" name="firstname" id="firstname" />

        //         <label htmlFor="lastname">LastName</label>
        //         <input value={users.lastname} onChange={handleInput} type="text" placeholder="Enter last name" autoComplete="off" name="lastname" id="lastname" />

        //         <label htmlFor="email">Email</label>
        //         <input value={users.email} onChange={handleInput} type="email" placeholder="Enter your email" autoComplete="off" name="email" id="email" />

        //         <label htmlFor="phone">Phone</label>
        //         <input value={users.phone} onChange={handleInput} type="text" placeholder="Enter your phone number" name="phone" id="phone" />

        //         <label htmlFor="about">About</label>
        //         <input value={users.about} onChange={handleInput} type="textbox" placeholder="Enter your bio" name="about" id="about" />

        //         <button type="submit">Edit</button>
        //     </form>
        //     <button onClick={() => navigate(-1)}>Go Back</button>
        // </div>


        <div className="editbody loginbody">
            <Navbar />
            <div className="container contain">
                <div className="screen editscreen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit} className="edit-form">
                            <h3 id="edit-heading">Edit Your Details</h3>
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
                                <i className="signup__icon fas fa-phone"></i>
                                <input className="login__input" value={users.phone} onChange={handleInput} type="text" placeholder="Enter your phone number" name="phone" id="phone" />
                            </div>

                            <div className="signup__field">
                                <i className="signup__icon fas fa-id-card"></i>
                                <input className="login__input" value={users.about} onChange={handleInput} type="textbox" placeholder="Enter your bio" name="about" id="about" />
                            </div>

                            <button type="submit" className="button login__submit">
                                <span className="button__text">EDIT DETAILS</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                            <button className="button login__submit" onClick={() => navigate(-1)}>Go Back</button>
                        </form>
                        
                        {/* <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div> */}
                </div>
            </div>

        </div>

    )
}


export default EditUserDetails;