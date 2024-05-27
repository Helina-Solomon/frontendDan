import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logos.png'
import cart from '../Assets/cartt.png'
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPLY</p>
        </div>
        <ul className='nav-menu'>
            <li >Shop <hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
