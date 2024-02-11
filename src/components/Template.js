import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import { FcGoogle } from "react-icons/fc";
import frameImage from '../assets/frame.png'


export default function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>  {title}</h1>

        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {
          formType === 'SignUp' ?
            (<SignUpForm setIsLoggedIn={setIsLoggedIn} ></SignUpForm>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)
        }
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
          <button>
            <FcGoogle />
            <p>SignUp with Google</p>
          </button>
        </div>
      </div>
      <div>
        <img src={frameImage} alt="login"
          width={558}
          height={504}
          loading='lazy' />
          <img src={image} alt="login"
          width={558}
          height={494}
          loading='lazy' />
      </div>
    </div>
  )
}
