import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

export default function SignUp({setIsLoggedIn}) {
  return (
    <div className=''>
        <div>
<Template 
     title="Welcome Back"
     desc1="Build skills for today, tomorrow, and beyond."
     desc2="Education to future-proof your career."
     image={signupImg}
     formType="SignUp"
     setIsLoggedIn={setIsLoggedIn}
></Template>
            
        </div>
    </div>
  )
}
