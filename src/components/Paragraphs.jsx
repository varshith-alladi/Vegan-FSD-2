import { Card } from "@mui/material";
import React from "react";
function Paragraphs(){
    return(
        <div style={{padding:'0 30px 20px 30px'}}> 
<ColoredCard>
        <Card style={{width:'80%',padding:20,backgroundColor:'rgb(0 248 255 / 65%)'}}>
        <h1 align="center"> Who we are</h1>
            <p align="center">  We are on a mission to make plant-based food affordable and accessible in India. We deeply believe in a future where animals are viewed as the living, breathing, feeling individuals that they are, and animal agriculture no longer exists.</p>
        </Card>
        <Card style={{width:'80%',padding:20,backgroundColor:'#ffeb00'}}> 
            <h1 align="center">Our Mission </h1>
            <p align="center"> We offer unparalleled customer service and the highest quality animal-free and cruelty-free products—all in one location. VeganEssentials is a one-stop shopping destination for all things vegan. </p>
             </Card></ColoredCard>
             <ColoredCard>
             <Card style={{width:'80%',padding:20,backgroundColor:'#ff4b0066'}}> 

<h1 align="center"> Our Guarantee</h1>
<p align="center"> If it’s not vegan-friendly, we don’t offer it, period. You can shop with confidence knowing that if it doesn’t meet our personal vegan ethics, you won’t find it in our store. No need to worry about checking labels and ingredient lists on the items we sell to scrutinize for hidden animal ingredients, because there aren’t any. We’ve done the work for you, so you can shop in confidence that as a vegan, you’ll be able to trust the items we offer.</p>
</Card>            
             <Card style={{width:'80%',padding:20,backgroundColor:'rgb(0 255 92 / 59%)'}}> 
        <h1 align="center"> Working Together</h1>
        <p align="center"> Every shipment that leaves our store is a vote in favor of supporting cruelty-free options to make for a kinder world today and for the future!

Thank you for making us your supplier of vegan products, and if we can assist in any way just call or email and we’ll be here to help you! </p>

 
<p align="center"> 
Sincerely, </p>

 
<p align="center"> 
Vegan Team</p> </Card>
</ColoredCard>
<Card style={{width:'80%',margin:'0 10%',padding:20,backgroundColor:'rgb(154 138 194 / 59%)'}}> 
<h1 align="center"> Our Team Members</h1>
<li align="center"> Varshith</li>
<li align="center"> Yashaswini</li>
<li align="center"> Deekshitha</li>
<li align="center"> Viswanath</li>
<li align="center"> Nehith Chaitanya</li>
</Card>
        </div>
    )
}
export default Paragraphs;

const ColoredCard = ({children})=>{
    return(
    <div style={{display:'flex',justifyContent:'space-evenly',gap:'10px',padding:20}}>
    {children}
    </div>
    )
    }
    