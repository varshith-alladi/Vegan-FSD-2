import React, {useState, createContext} from 'react';
import {Routes, Route} from 'react-router-dom'
import LoginDecider from './LoginDecider';
import NoMatch from './NoMatch';
import UserProfile from './UserProfile';
import EditUserDetails from './EditUserDetails';
import AboutUs from './AboutUs';
import FaqMain from './FaqMain';
import Contactus from './Contactus';
import Card from '../products/Menu';
import Home from '../products/Home';
import OrderCart from '../products/Ordercart';
import SingleRecipe from '../Recipies/Singlerecipe';
import Recipe from '../Recipies/FoodRecipe';
import Display from '../Admin/Contactdisplay';
import UserDisplay from '../Admin/Userdisplay';
import AdminLogin from '../Admin/AdminLogin';
import Homepro from '../ProHome/Homepro';
import Paymentmethod from './Payment';
import SingleRecipe1 from '../Recipies/SingleRecipe1';
import AdminHome from '../Admin/AdminHome';
import AdminHome1 from '../Admin/AdminHome1';
export const store = createContext();

function App(){

    const [users, setUsers] = useState({ 
    firstname : "",
    lastname : "",
    email : "",
    password : "",
    confirmPassword : "",
    phone : "",
    about : ""});

    return(
        <div>

            <store.Provider value={[users,setUsers]}>
            <Routes>
                <Route path='/' element={<LoginDecider />} />
                <Route path='/Home' element={<Homepro/>} exact/>
                {/* <Route path='/home' element={<Page />} /> */}
                <Route path='/product' element={<Home/>} exact/>
                <Route path='/Menu' element={<Card/>} exact/>
               <Route path ='/cart' element={<OrderCart/>}exact/>
                <Route path='/faq' element={<FaqMain />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<Contactus />} />
                <Route path='/user-profile' element={<UserProfile />} />
                <Route path='/edit-details' element={<EditUserDetails />} />
                <Route path='/recipe' element={<Recipe />} />
                <Route path='/recipe/1' element={<SingleRecipe />} />
                <Route path='/recipe/2' element={<SingleRecipe1 />} />
                <Route path='/ContactDisplay' element={<Display />} />
                <Route path='/UserDisplay' element={<UserDisplay />} />
                <Route path='/Alogin' element={<AdminLogin />} />
                <Route path='/payment' element={<Paymentmethod />} />
                <Route path='/adminhome' element={<AdminHome />} />
                <Route path='/adminhome1' element={<AdminHome1 />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
            </store.Provider>
            
        

        </div>
    )
}

export default App;