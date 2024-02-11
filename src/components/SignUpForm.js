import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
export default function SignUpForm({setIsLoggedIn}) {
  const [formData, setformData] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmPassword:'',
  });
  const [showPassword, setShowPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState(false)
  function changeHandler( e) {
    setformData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }
  const navigate = useNavigate()
  function submitHandler(e) {
    if (formData.password != formData.confirmPassword) {
      toast.warning('password do not match')
    }
    else{
      e.preventDefault()
      setIsLoggedIn(true)
      toast.success("Logged In")
      navigate('/Dashbord')
    }
    

  }
  return (
    <div>
        {/* {student-instructor tab} */}
        <div>
            <button>
                student
            </button>
            <button>
              Instructor
            </button>
        </div>
        <form onSubmit={submitHandler}>
          {/* first name and last name is done */}
          <div>
          <label htmlFor="">
            <p>First Name <sup>*</sup></p>
            <input 
            placeholder='Enter First Name'
            required  
            name='firstname'
            value={FormData.firstname}
            onChange={changeHandler}

            type="text" />
          </label>
          <label htmlFor="">
            <p>Last Name <sup>*</sup></p>
            <input 
            placeholder='Enter Last Name'
            required
            name='lastname'
            value={FormData.lastname}
            onChange={changeHandler}

            type="text" />
          </label>
          </div>
          {/* email id */}
          <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    type="email"
                    placeholder='enter email Address'
                    required
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}

                />
            </label>
            {/* createPassword and confirm password  */}
            <div>
              <label htmlFor="">
              <p>Create  Password <sup>*</sup></p>
                <input
                    type={showPassword ? ('text') : ('password')}
                    placeholder='enter password'
                    required
                    name='password'
                    value={formData.password}
                    onChange={changeHandler}

                />
                <span onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                </span>
              </label>
              <label htmlFor="">
              <p>Confirm Password <sup>*</sup></p>
                <input
                    type={showPassword ? ('text') : ('password')}
                    placeholder='enter password'
                    required
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={changeHandler}

                />
                <span onClick={() => setConfirmPassword((prev) => !prev)}>
                    {confirmPassword ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                </span>
              </label>
            </div>
            <button>
              Create Account
            </button>
        </form>
    </div>
  )
}
