import React from 'react'
import { FaShoppingCart  } from "react-icons/fa";

export default function Header() {
  return (  
    <header>
        <div>
            <span className='logo'>House Stuff</span>
            <ul className='nav'>
              <li>About us</li>
              <li>Contacts</li>
              <li>User account</li>
            </ul>
            <FaShoppingCart className='shop-cart-button'/>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
