import React from 'react'
// import LoginForm from '../components/LoginForm'
import loginImg from '../assets/login.png'
import Template from '../components/Template'

export default function Login({setIsLoggedIn}) {
  return (
    <div className=''>
        <div>
<Template
     title="Welcome Back"
     desc1="Build skills for today, tomorrow, and beyond."
     desc2="Education to future-proof your career."
     image={loginImg}
     formType="Login"
     setIsLoggedIn={setIsLoggedIn}
></Template>
            
        </div>
    </div>
  )
}
