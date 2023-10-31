import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menu,setMenu]=useState("shop")
    window.addEventListener("scroll",()=>{
      var navbar = document.querySelector(".navbar");
      if(window.scrollY>150)
      {
        navbar.style.position="sticky ";
        navbar.style.top="0"
        navbar.style.zIndex="100"
        
      }else{
        navbar.style.position="static"
      }
    })
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
           <Link to="/"><img src={logo} alt="" /></Link>
           <Link  style={{textDecoration:"none"}}  to="/">   <p>SHOPPER</p></Link>
        
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:"none",color:"##7C7481"}} to="/">Shop</Link>  {menu==="shop"?<hr />:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration:"none",color:"##7C7481"}} to="/mens">Men</Link> {menu==="mens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:"##7C7481"}} to="/womens">Women</Link> {menu==="womens"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"##7C7481"}} to="/kids">Kids</Link> {menu==="kids"?<hr />:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
           <Link to="/login"><button>Login</button></Link>
           <Link to="/cart"><img src={cart_icon} alt="" /> </Link>
          <div className='nav-cart-count'>0</div>
        </div>

    </div>
  )
}

export default Navbar