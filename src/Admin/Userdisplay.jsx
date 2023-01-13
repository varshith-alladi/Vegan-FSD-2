import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Contact.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
export default  function UserDisplay(){

    const[users,setusers]=useState([]);
    useEffect(()=>{
        loadItems();
    },[]);
    const loadItems =async()=>{
         const result = await axios.get("http://localhost:3001/register");
         setusers(result.data);
    };
    const Remove=async (id)=>{
        let isDelete=window.confirm("Do you Really Want to delete!");
        if(isDelete){
            await axios.delete(`http://localhost:3001/register/${id}`);
            loadItems();
        }
    }
    users.sort((a, b) => b.id - a.id);
    return(<> 
    <table className="alter">  
    <tr><th>Id</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Password</th><th>delete</th></tr> 
    {users.map((user)=>
    <tr>
    <td>{user.id}</td>
    <td>{user.fname}</td>
    <td>{user.lname}</td>
    <td>{user.email}</td>
    <td>{user.password}</td>
    <td> <IconButton aria-label="delete" size="large" onClick={()=>Remove(user.id)}>
        <DeleteIcon fontSize="inherit" color='error'/>
      </IconButton></td>
    </tr>  
  )} </table> </>);
}
