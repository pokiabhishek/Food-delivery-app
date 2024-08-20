import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign up")
  return (
    <div className='login-popup'>
      <form  className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false) } src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-input'>
            {currState === "Login" ? <></> : <input type='text' placeholder='your name' required/>}
            <input type="text" placeholder='your email'  required/>
            <input type="password" placeholder='your password'  required/>
        </div>
        <button>{currState==="Sign up"? "Create account" : "Login"}</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel.</p>
        </div>
        {currState === "Login"
        ?<p>create a new account? <span onClick={() => setCurrState("Sign up")}>Click here!</span></p>
        :<p>Already have a account? <span onClick={() => setCurrState("Login")}>Login here!</span></p>
        }

      </form>
    </div>
  )
}

export default LoginPopup
