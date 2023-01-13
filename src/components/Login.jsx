import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.modules.css';
import axios from 'axios';

function Login(props) {

    const [userLogin, setUserLogin] = useState(
        {
            email: "",
            password: ""
        })

    // const [loginRecords, setLoginRecords] = useState([]);
    // const [formErrors, setFormErrors] = useState({});
    // const [isSubmit, setIsSubmit] = useState(false);


    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserLogin({ ...userLogin, [name]: value });
    }
    

    // handling the submit and routing to home page

    const handleSubmit = (event) => {

        event.preventDefault();

 
        // const latestRecord = {...userLogin, id: new Date().getTime().toString()};
        // console.log(loginRecords);
        // setLoginRecords([...loginRecords, latestRecord]);
        // console.log(loginRecords);

        setUserLogin({
            email: "",
            password: ""
        })
        
            navigate('/Home');
        // setFormErrors(loginValidate(userLogin));
        // setIsSubmit(true);

    }

    // Using Useeffect for form validation

    // useEffect(() => {
    // console.log(formErrors);
    // if(Object.keys(formErrors).length === 0 && isSubmit){
    //     console.log(userLogin);
    // }}, [formErrors, isSubmit, userLogin]);

    const navigate = useNavigate();


    return (
        // <div className='loginbody'>
        //     <div className='login-body-items formbody'>
        //         <h1>Login</h1>
        //     </div>
        //     <div  className='login-body-items'>
        //         <form onSubmit={handleSubmit}>
        //             <div>
        //                 <label htmlFor="email">email</label>
        //                 <input value={userLogin.email} onChange={handleInput} type="email" placeholder="Enter your email" name="email" id="email" required />
        //             </div>

        //             <div>
        //                 <label htmlFor="password">password</label>
        //                 <input value={userLogin.password} onChange={handleInput} type="password" placeholder="***********" name="password" id="password" required />
        //             </div>

        //             <div className='login-body-items'>
        //                 <button type="submit">Login</button>
        //             </div>
        //         </form>
        //     </div>

        //     <div>
        //         <button onClick={() => props.onFormSwitch("Signup")}>Don't have an account ? Signup here.</button>
        //     </div>


        // </div>
        <div className='loginbody'>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form onSubmit={handleSubmit} className="login">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input className='login__input' value={userLogin.email} onChange={handleInput} type="email" placeholder="Enter your email" name="email" id="email" required />
                            </div>
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input className='login__input' value={userLogin.password} onChange={handleInput} type="password" placeholder="password" name="password" id="password" required />
                            </div>
                            <button type="submit" className="button login__submit">
                                <span className="button__text">Log In Now</span>
                                <i className="button__icon fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <button className='signup' onClick={() => props.onFormSwitch("Signup")}>Don't have an account ? <span className='span-signup'>Signup here</span>.</button>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <a href="#" className="social-login__icon fab fa-instagram"></a>
                                <a href="#" className="social-login__icon fab fa-facebook"></a>
                                <a href="#" className="social-login__icon fab fa-twitter"></a>
                            </div>
                        </div>
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

export default Login