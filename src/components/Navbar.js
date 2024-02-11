import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.svg'
import { toast } from 'react-toastify'

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {

  return (
    <div className=''>

      <NavLink to='/'> <img src={Logo} alt="logo" width={160} height={32} loading='lazy' srcset="" /> </NavLink>

      <ul className=''>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
      </ul>
      <div className='flex ml-3 mr-3 gap-3'>
        {!isLoggedIn &&
          <NavLink to='/Login'> <button>Login</button></NavLink>
        }
        {!isLoggedIn &&
          <NavLink to='/SignUp'><button>SignUp </button></NavLink>
        }
        {isLoggedIn &&
          <NavLink to='/'><button onClick={()=>{
            setIsLoggedIn(false)
            toast.success('Logged Out')
          }}>Log Out </button></NavLink>
        }
        {isLoggedIn &&
          <NavLink to='/Dashbord'><button>Dashbord </button></NavLink>
        }


      </div>
    </div>
  )
}
