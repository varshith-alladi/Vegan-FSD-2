import React from 'react'
import Card from './Menu'
//import Carddata from './Carddata'
import Slider from './Slider/Slider'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
export default  function Home(){

  const[products,setproducts]=useState([]);
  useEffect(()=>{
      loadItems();
  },[]);
  const loadItems =async()=>{
       const result = await axios.get("http://localhost:3001/products");
       setproducts(result.data);
  };
   const filteritem=(cat)=>{
  const filtered = products.filter(deal => deal.category === cat);
  setproducts(filtered);
   }


  return (
    <>
    <Navbar></Navbar>
    <Slider/>
    <div style={{paddingTop:'50px'}}>
      
    <div className="menu-tabs container1">
      <div className="menu-tab container2 d-flex justify-content-around">
    <button className='filter-button' onClick={()=>filteritem("Dairy")}>Dairy</button>
    <button className='filter-button' onClick={()=>filteritem("Fitness")}>Fitness</button>
    <button className='filter-button' onClick={()=>filteritem("Meat")}>Meat</button>
    <button className='filter-button' onClick={()=>filteritem("Desserts")}>Desserts</button>
    <button className='filter-button' onClick={loadItems}>All</button>
    </div>
    </div>
    <div className='home-cards'><Card details={products}/></div>
    </div>
    </>
  )
}


