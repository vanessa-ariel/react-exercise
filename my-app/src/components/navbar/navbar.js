import React from 'react'
import { Link } from 'react-router-dom' // to prevent the page from refreshing every time the link is clicked
import Menu from './menu'
import './navbar.css'
import logo from './logo-reprograma.png'

const Navbar = () => (
    <nav className='navbar'>
        <Link to='/'> 
            <img
                className='navbar__logo'  
                src= {logo} 
                alt='Reprograma'
            />
        </Link>
        <Menu/>
    </nav>
)

export default Navbar