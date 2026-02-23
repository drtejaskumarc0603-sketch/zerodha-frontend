//import React from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter , Routes , Route} from 'react-router-dom'; 
import './index.css';
import Homepage from './landingpage/home/homepage';
import SignUp from './landingpage/signup/signup';
import  PricingPage from './landingpage/pricing/pricingpage';
import SupportPage from './landingpage/support/supportpage';
import ProductPage from './landingpage/products/productpage';
import Aboutpage from './landingpage/about/aboutpage';
import Navbar from './navbar.js';
import Footer from './footer.js';
import NotFound from './notfound.js';
import Login from './landingpage/login/login.js';
//import Home from "./components/Home"; // dashboard Home
//import Dashboard from "./components/Dashboard.js"




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage />} />
   <Route path="/signup" element={<SignUp />} />
   <Route path="/about" element={<Aboutpage />}  />
   <Route path="/product" element={<ProductPage />} />
   <Route path="/pricing" element={< PricingPage />} />
   <Route path="/support" element={<SupportPage />} />
   <Route path="*" element={<NotFound />} />
   <Route path="/login" element={<Login />} />
   
 


  <Route path="*" element={<NotFound />} />
   
  </Routes>
  <Footer/>
  </BrowserRouter>
);
