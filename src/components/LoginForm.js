import React, { useState } from 'react'
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function LoginForm({setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    console.log(formData);
    const [showPassword, setShowPassword] = useState(false)
    function changeHandler(e) {
        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        )
        )
    }
    const navigate = useNavigate()
    function submitHandler(e) {
        e.preventDefault()
        setIsLoggedIn(true)
        toast.success("Logged In")
        navigate('/Dashbord')

    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    type="email"
                    placeholder='enter email id'
                    required
                    name='email'
                    value={formData.email}
                    onChange={changeHandler}

                />
            </label>

            <label>
                <p>Password <sup>*</sup></p>
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
                <NavLink to='#'>
                    <p>
                        Forgot Password
                    </p>
                </NavLink>
            </label>
           <button>
            Sign In
           </button>

        </form>
    )
}
