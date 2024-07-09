import React, {useState} from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("home");

  return (
    <div className='navBar'>
        <img src={assets.logo} className='logo' alt="" />
        <ul className='navbar-menu'>
            
            <Link to='/' onClick={()=>setMenu("home")} className={menu==='home'?'active':''}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==='menu'?'active':''}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile")} className={menu==='mobile'?'active':''}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact")} className={menu==='contact'?'active':''}>Contact Us</a>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" />
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt="" />
                <div className='dot'></div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar