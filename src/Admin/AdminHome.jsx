import React from "react";
import "./admin.css";
import axios from "axios";
import { useState,useEffect } from "react";
import Display from "./Contactdisplay";
export default function AdminHome(){
    const[contacts,setcontacts]=useState([]);
    useEffect(()=>{
        loadItems();
    },[]);
    const loadItems =async()=>{
         const result = await axios.get("http://localhost:3001/contact");
         setcontacts(result.data);
    };
    const[users,setusers]=useState([]);
    useEffect(()=>{
        loadusers();
    },[]);
    const loadusers =async()=>{
         const result = await axios.get("http://localhost:3001/register");
         setusers(result.data);
    };
    return(<><div style={{backgroundImage:'url("https://clebsnepal.com/future-admin/images/loginbg.jpg")',height:"100vh",backgroundRepeat: "no-repeat"}}>
    <hgroup>
    <h2>Dashboard</h2>
  </hgroup>
  <br></br>
  <section>
    <dl>
      <dt>Users</dt>
      <dd>{users.length}</dd>
    </dl>
    <dl>
      <dt>Messages</dt>
      <dd>{contacts.length}</dd>
    </dl>
    <dl>
      <dt>Active Users</dt>
      <dd>10</dd>
    </dl>
    <dl>
      <dt>Products</dt>
      <dd>22</dd>
    </dl>
  </section>
<br></br>
  <div className="menu-tabs container1">
      <div className="menu-tab container2 d-flex justify-content-around">
      <a href="/adminhome" class="abc">Users</a>
      <a href="/adminhome1" class="abc">Messages</a>
      <a href="/" class="abc">logout</a>
    </div>
    </div>
    <br></br>
<div>
    <Display/>
</div>
  </div>
  </>);
}