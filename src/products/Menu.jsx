import React from 'react'
import axios from 'axios'
import './Style.css'


 function Card(props) {
    let qty=1;

    const addItem=async(a,b)=>{ 
        
        let isExisting=false;
        const result= await axios.get("http://localhost:3001/order")
        if(result.data.length ===0){
            const order={name:a,price:b,qty:qty};
            axios.post("http://localhost:3001/order",order)
        }
        else {
            result.data.map((order)=>{
                if(a===order.name){
                    order.qty+=1;
                    const order={
                        name:a,price:b,qty:order.qty
                    };
                    axios.put(`http://localhost:3001/order/${order.id}`,order)
                isExisting = true;
                }
            });
            if(isExisting ==false){
                const order={
                    name:a,
                    price:b,
                    qty:qty,
                };
                axios.post('http://localhost:3001/order',order)
            }
        }
    };
        
  return (
    <>
    {props.details.map((value,index)=>(
    <div className='card' key={index}>
        <div className='card-image'>
        <img style={{width:"250px",height:"200px"}}src={value.image}/>
        </div>
        <div>
            <p className='card-title'>
                {value.title}
            </p>
            <p>{value.desc}</p>
            <p>Price:{value.price}</p>
            <button className='addcart' onClick={()=>addItem(value.title,value.price)}>Add</button>
        </div> </div>))}
        
    </>
  )
}

export default Card;