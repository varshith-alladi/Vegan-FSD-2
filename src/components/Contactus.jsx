import React from 'react'
import { useState } from 'react';
import axios from "axios";
import Navbar from './Navbar';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import "../styles/contactus.modules.css";

export default function Contactus() {
    const [state, setState] = useState({
        name: "",
        email: "",
        phonenumber: "",
        message: ""
    });

    // const [records, setRecords] = useState([]);

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };


    // const { name, email, phonenumber, message } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/contact",{
            name:state.name,
            email:state.email,
            phonenumber:state.phonenumber,
            message:state.message
        }).then(res=>{
         console.log(res.state)
         alert("You message is successfully sent.")
        })
        // const newRecord = {...state, id: new Date().setTime().toString()}
        // setRecords({...records, newRecord});
        // console.log(state);

        // setState({
        //     name: "",
        //     email: "",
        //     phonenumber: "",
        //     message: ""
        // })
    };


    return (
        <section className="contact">
        <Navbar />
            {/* <ToastContainer position="top-center" /> */}
            <div className="content">
                <h2>Contact us</h2>
                <p>For orders-related queries: contact on support@gmail.com or whatsapp</p>
            </div>
            <div className="containerMain">
                <div className="contactInfo">
                    <div className="box">
                        <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>IIIT Sri City,<br />Chittoor,<br />517416.</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>
                                varshith.a20@iiits.in<br />yashaswini.j20@iiits.in<br />deekshitha.p20@iiits.in<br />vishwanath.k20@iiits.in<br />nehithchaithanya.r20@iiits.in
                            </p>
                        </div>

                    </div>

                </div>
                <div className="contactform">
                    <h2>Get in touch with us</h2>

                    <form action="/contactus" id="form" method="post" name="form" onSubmit={handleSubmit}>

                        <div className="formbox">
                            <div className="inputbox w50">
                                <input type="text" name="name" onChange={handleInputChange} value={state.name} />
                                <span>Full Name</span>
                            </div>
                            <div className="inputbox w50">
                                <input type="email" name="email" onChange={handleInputChange}
                                    value={state.email} />
                                <span>Email Address</span>
                            </div>
                            <div className="inputbox w50">
                                <input type="text" name="phonenumber" onChange={handleInputChange}
                                    value={state.phonenumber} />
                                <span>Mobile Number</span>
                            </div>
                            <div className="inputbox w500">
                                <textarea name="message" onChange={handleInputChange}
                                    value={state.message} ></textarea>
                                <span>Write your Message..</span>
                            </div>
                            <div className="inputboxsubmit">
                                <input type="submit" value="Send" />
                            </div>

                        </div>


                    </form>

                </div>
            </div>

            {/* <div>
                {
                    records.map((currRec) => {
                        return(
                            <div> 
                                <p>{currRec.name}</p>
                                <p>{currRec.email}</p>
                                <p>{currRec.phonenumber}</p>
                                <p>{currRec.message}</p>
                            </div>
                        )
                    })
                }
            </div> */}

        </section>
    );
}
