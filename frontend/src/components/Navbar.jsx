import React from 'react'
import {NavLink} from "react-router-dom"
import "./Navbar.css";
import { useAuth } from '../store/auth';
const Navbar = () => {
  
  const {isLoggedIn} = useAuth() ;
  
    return (


    <>
    
    <header>
        <div className=" container ">
            <div className='logo-brand'>
                <NavLink to ="/">GauravParasar</NavLink>
            </div>

            <nav className='flex gap-3 '>
                <ul>
                    <li>
                        <NavLink to ="/">Home</NavLink>
                    </li>
                     
                </ul>
                <ul>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                     
                </ul>
                <ul>
                    <li>
                        <NavLink to="/service">Services</NavLink>
                    </li>
                     
                </ul>
                <ul>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                     
                </ul>
            {
                isLoggedIn ? <ul>
                <li>
                 <NavLink to="/logout">Logout</NavLink>
                 </li> 
             </ul> : <>
             
             <ul>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                     
                </ul>
                <ul>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                     
                </ul>
             
             </>
            }

            
            </nav>
        </div>
    </header>
    
    </>
  )
}

export default Navbar