import React from "react";
import "../products/Style.css";
import { useNavigate,Routes,Route } from 'react-router-dom';
import { RecipeData } from "../list";
import { useState } from "react";
import Navbar from "../components/Navbar";
import SingleRecipe from "./Singlerecipe";

export default function Recipe() {
  const history = useNavigate();

  const redirect = path => {
    history(path);
  };
  const [items,setItems]=useState(RecipeData);
      return(<>
      <Navbar/>
      <br></br><br></br>
      <div className='home-cards'>
       {items.map((value,index)=>(
    <div className='card' key={value.id}>
        <div className='card-image'>
        <img style={{width:"250px",height:"200px"}}src={value.image}/>
        </div>
        <div>
            <p className='card-title'>
                {value.tit}
            </p>
            <p>{value.des}</p>
            <button className='addcart' onClick={()=>redirect(`/recipe/${value.id}`)}>View More</button>
        </div> </div>
        ))}
        </div>
  
          <Routes>
        <Route
          path="/recipe/:id"
          render={({ match }) => (
            <SingleRecipe
              product={RecipeData.find(
                (product) => String(product.id) === match.params.id
              )}
            />
          )}
        />
      </Routes>
      </>);
  }
  