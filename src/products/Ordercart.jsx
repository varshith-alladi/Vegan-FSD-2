import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from "../components/Navbar";
import './Style.css'
const OrderCart = () => {
    const[items,setItems]=useState([]);
    const [total,setTotal]=useState();
    useEffect(()=>{
        loadItems();
    },[]);
    let totalPrice=0;
    const loadItems =async()=>{
         const result = await axios.get("http://localhost:3001/order");
         setItems(result.data);
         result.data.map((prices)=>{
            totalPrice +=prices.qty * prices.price
         });
         setTotal(totalPrice);
    };
    const deleteItem=async (id)=>{
        let isDelete=window.confirm("Do you Really Want to delete!");
        if(isDelete){
            await axios.delete(`http://localhost:3001/order/${id}`);
            loadItems();
        }
    }
    const incDec=async(a,b,c,d,e)=>{
        if(c==="dec"){
            if(a===1){
                a=1;
            }
            else{
                a-=1;
            }
        }
        else {
            if(a===10){ a=10; alert("Max Quantity is 10"); return;}
            else{
            a+=1;}
        }
         const order={name:d,price:e,qty:a};
         await axios.put(`http://localhost:3001/order/${b}`,order);
         loadItems();
    }
  return (
    <>
    <Navbar/>
    <br></br>

    <div className='order-area'>
        <div className='order-total'>
            Your order
        </div>
        </div>
        {items.map((item,index)=>(
    <div className='order-card' key={index}>
    <div className='order-item'>{item.name}</div>
    <div className='order-qty'>
        Quantity:<button className='qty-btn' onClick={()=>incDec(item.qty,item.id,"dec",item.name,item.price)}>-</button>
        <input type="text" className='qty-input' value={item.qty}/>
        <button className='qty-btn' onClick={()=>incDec(item.qty,item.id,"inc",item.name,item.price)}>+</button>
        {/* onClick={()=>incDec(item.qty,item.id,"dec",item.name,item.price) */}
    </div>
    <div className='order-price'>{ item.price}</div>
    <button className='delete-btn' onClick={()=>deleteItem(item.id)}>Remove</button>
    </div>))};
    <div className='order-total'>
        <div className='total'>Total</div>
        <div className='total-price'>{total}</div>
        <div className='place-order-btn'><a href="/payment">Place Order</a></div>

    </div>
   
    </>
  )
}

export default OrderCart;