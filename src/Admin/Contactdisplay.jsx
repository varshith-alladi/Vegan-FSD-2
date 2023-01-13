import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DeleteIcon from '@mui/icons-material/Delete';

import {  TextField, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';
export default  function Display(){

    const[contacts,setcontacts]=useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(()=>{
        loadItems();
    },[]);
    const loadItems =async()=>{
         const result = await axios.get("http://localhost:3001/contact");
         setcontacts(result.data);
    };
    const Remove=async (id)=>{
        let isDelete=window.confirm("Do you Really Want to delete!");
        if(isDelete){
            await axios.delete(`http://localhost:3001/contact/${id}`);
            loadItems();
        }
    }
    const requestSearch = (searchedVal) => {
      const filteredRows = contacts.filter((row) => {
          return row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase());
      });
      if (searchedVal.length < 1) {
          setFilter(contacts)
      }
      else {
          setFilter(filteredRows)
      }
    };
    return(<>
    
    <div className='search'>
          <i class="fa-solid fa-magnifying-glass"></i>
        <TextField onChange={(e) => requestSearch(e.target.value)}
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>  
    {/* <TextField onChange={(e) => requestSearch(e.target.value)}
                fullWidth
                id="standard-bare"
                variant="outlined"
                defaultValue="How can we help"
                InputProps={{
                  endAdornment: (
                    <IconButton >
                      <SearchOutlined />
                    </IconButton>
                  ),
                }}
              /> */}

    <table className="alter">  
    <tr><th>Id</th><th>Name</th><th>Email</th><th>Message</th><th>delete</th></tr> 
    {filter.map((contact)=>
    <tr>
    <td>{contact.id}</td>
    <td>{contact.name}</td>
    <td>{contact.email}</td>
    <td>{contact.message}</td>
    <td> <IconButton aria-label="delete" size="large" onClick={()=>Remove(contact.id)}>
        <DeleteIcon fontSize="inherit" color='error'/>
      </IconButton></td>
    </tr>  
  )} </table> </>);
}
