import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { store } from "./App";
import '../styles/userprofile.modules.css';

function UserProfile() {

    const [users, setUsers] = useContext(store);
    // const [editUsers, setEditUsers] = useContext(store);
    console.log(users);
    // console.log(editUsers)

    // console.log(users[0].username)
    const navigate = useNavigate();
    const navigate1 = useNavigate();

    return (
        <div className="user-profile-body">
            <Navbar />
            <div class="page-content page-container" id="page-content">
                <div class="padding">
                    <div class="row container d-flex justify-content-center">
                        <div class="col-xl-6 col-md-12">
                            <div class="card-border">
                                <div class="row m-l-0 m-r-0">
                                    <div class="col-sm-4 bg-c-lite-green user-profile">
                                        <div class="card-block text-center text-white">
                                            <div class="m-b-25">
                                                <i className="user-photo fas fa-user fa-10x"></i>
                                            </div>
                                            <h6 class="f-w-600"><p>{users.firstname} {users.lastname}</p></h6>
                                            <p><button className="edit-button" onClick={() => navigate('/edit-details')} ><i className="fas fa-edit"></i> Edit</button></p>
                                            <button className="logout" onClick={() => navigate('/')}>Logout</button>
                                        </div>
                                    </div>
                                    <div class="col-sm-8">
                                        <div class="card-block">
                                            <h6 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Email</p>
                                                    <h6 class="text-muted f-w-400">{users.email}</h6>
                                                </div>
                                                <div class="col-sm-6">
                                                    <p class="m-b-10 f-w-600">Phone</p>
                                                    <h6 class="text-muted f-w-400">{users.phone}</h6>
                                                </div>
                                            </div>
                                            <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">About</h6>
                                            <div class="row">
                                                <div class="">
                                                    <p class="m-b-10 f-w-600">{users.about}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;