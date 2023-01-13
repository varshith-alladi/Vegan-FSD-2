import React from 'react';
import './FoodRecipe.css';
import Navbar from '../components/Navbar';

export default function SingleRecipe(){
    return (
  <>
  <Navbar/>
    <div className='recipe_container'>
      <div className="recipe_image">
        <img className="recipe_img" src="https://hurrythefoodup.com/wp-content/uploads/2017/05/vegan-potato-salad-5.jpg"/>
      </div>
      <div className="recipe_text">
        <h1>This classic Southern style Vegan Potato Salad is a crowd-pleasing favorite.</h1>
        <br></br>
        <p>Ingredients:  potatoes,celery,onion,vegan mayo,lemon,vinegar,mustard,herbs,veggies</p>
        <p>1)Mix the dressing together in a small bowl. Set aside. Make the dressing while waiting for the water to boil for the potatoes.</p>
        <p>2) In a large pot, cover the potatoes with about 1 1/2 inch water, boil, covered askew, for 15 – 20 minutes. Drain and rinse the potatoes under cool running water, let cool a few minutes.</p>
        <p>3)In a large mixing bowl, add the cubed potatoes, veggies, dressing, and mix until combined.</p>
        <p>And that’s it, now you can enjoy the potato salad as is or chill before serving.</p></div>
    </div>
    </>
    );
};