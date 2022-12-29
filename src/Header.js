import React from 'react'
import {RiMenuLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'

import "./Header.css"

const Header = () => {
  return (
    
    <header>
        <div className='menu'>
            <RiMenuLine/>
            <h2>IndigoLearn</h2>
            
        </div>
        <nav className='navbar'>
            <ul>
                <li><a>BUY COURSES</a>
                    <ul>
                        <li><a>CA Foundation</a></li>
                        <li><a>CA Inter</a></li>
                        <li><a>CA Final</a></li>
                        <li><a>CFA</a></li>
                        <li><a>ACCA-Skills level </a></li>
                        <li><a>CMA Inter </a></li>
                        <li><a>CS Exec </a></li>
                        <li><a>CBSE </a></li>

                    </ul>
                </li>
                <li><a>BUY BOOKS</a></li>
                <li><a>PROGRAMS</a>
                    <ul>
                        <li><a>CA</a></li>
                        <li><a>CFA</a></li>
                        <li><a>ACCA</a></li>
                    </ul>
                </li>
                <li><a>FREE RESOURCES</a></li>
            </ul>
        </nav>
        <div className='login'>
            <FaUserCircle/>
            <h6>Log In/Sign Up</h6>
        </div>
           
        
        
    </header>
  )
}

export default Header
