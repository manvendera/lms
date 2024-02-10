import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Contact'>Contact</NavLink></li>
            {/* <li><NavLink to='/'></NavLink></li> */}
        </ul>
    </div>
  )
}
