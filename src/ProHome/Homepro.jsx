import React from 'react'
import { Products } from "./products";
import contents from "../content";
import Body from "./body";
import Float from "./hoveritems";
import Header from "./Header";
import Footer from "./footer";
import "./App.modules.css";
import "./nav1.modules.css";
import "./Home.modules.css";
import "./index.css";
import Navbar1 from './nav1';


export default function Home() {
  return (
    <div>
      <Navbar1 />
      <Body />
      <Float />
      <Header />

      <div className="classApp">
        {contents.map((contents) => (
          <Products
            key={contents.id}
            image={contents.image}
            name={contents.name}
            totalSales={contents.totalSales}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
