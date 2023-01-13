import React from "react";
import axios from "axios";
import Card from "./Menu";

export default async function Filter(){
    try {
        const response = await axios.get(`http://localhost:3001/products`)
        const deals = res.json(response.data)
        const dealsWon = response.where(deals, {category:"Breakfast"})
        return 
    }
    catch (err) {
        console.log(err)
    }
}
