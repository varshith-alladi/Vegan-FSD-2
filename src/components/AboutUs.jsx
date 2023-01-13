import React from "react";
import FooterAboutUs from "./Footer_aboutus";
import Paragraphs from "./Paragraphs";
import Navbar from "./Navbar";
import '../styles/aboutus.modules.css';


function AboutUs(){
    return(
        <div className="about-body" style={{textAlign:'center'}}> 
        <Navbar />
            <h1 align="center" class="about"> About us</h1>
            
            {/* <img src="../Vegan1.jpg" alt="Vegan1"   height={350} width={1000} left-padding={1000}  /> */}
            <Paragraphs />
            <FooterAboutUs />
            

        </div>
    )
}
export default AboutUs;