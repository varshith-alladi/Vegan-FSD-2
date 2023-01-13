import React from 'react';
import './FoodRecipe.css';
import Navbar from '../components/Navbar';

export default function SingleRecipe1(){
    return (
  <>
  <Navbar/>
    <div className='recipe_container'>
      <div className="recipe_image">
        <img className="recipe_img" src="https://www.indianveggiedelight.com/wp-content/uploads/2019/07/lemon-quinoa-featured.jpg"/>
      </div>
      <div className="recipe_text">
        <h1>Lemon Quinoa!!Its a one-pot, vegan meal</h1>
        <br></br>
        <p>Ingredients:  Quinoa,mustard seeds,chillies,uraddal,lemon juice,coriander,cumin</p>
        <p>1)Cook the rinsed quinoa with 2 cups of water on medium-low heat until cooked, and let it cool.</p>
        <p>2) In a Kadai, add oil. Once it's hot, add in the peanuts and fry them until they turn slightly golden brown. Take them out and keep them aside.</p>
        <p>3)In the same Kadai, add mustard seeds, jeera, urad dal, and saute until the dal turns light brown. Then add green chiles, curry leaves, hing, and saute for a few seconds.</p>
        <p>4)Turn off the flame, add the cooled quinoa, salt, and juice of half lemon, and mix everything well.serve Indian Style Lemon Quinoa hot with papad or pickle</p></div>
    </div>
    </>
    );
};