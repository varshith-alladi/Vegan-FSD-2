import React from "react";
// import {useNavigate} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import '../styles/navbar.modules.css';


function Navbar() {

    // const navigate = useNavigate()

    return (

        
            <nav>
                  <div class="logo-image">
        <img
          src="https://www.pngall.com/wp-content/uploads/8/Vegan-Logo-PNG.png"
          alt="logo"
        />
      </div>
                {/* <NavLink to='/home'>HOME</NavLink> */}
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/product'>Product</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
                <NavLink to='/contactus'>CONTACTUS</NavLink>
                <NavLink to='/aboutus'>ABOUTUS</NavLink>
                <NavLink to='/user-profile'>PROFILE</NavLink>
                <NavLink to='/recipe'>Recipies</NavLink>
                <NavLink to='/cart'>cart</NavLink>
                {/* <NavLink to='/'>Logout</NavLink> */}
            </nav>
        

    )
}

export default Navbar;