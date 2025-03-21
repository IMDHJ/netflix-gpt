import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignUpForm, setIsSignUpForm] = useState(false);

    const toggleSignUpForm = () =>{
        setIsSignUpForm(!isSignUpForm)
    };

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg'
            alt='logo'
        />
      </div>
      <form className='w-4/12 absolute p-12 bg-black my-48 mx-auto right-0 left-0 text-white bg-opacity-80'>   
        <h1 className='font-bold text-3xl py-4'>{isSignUpForm ? "Sign Up" : "Sign In"}</h1>       
        {isSignUpForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full rounded-md bg-black bg-opacity-65 border border-s-white'></input>}
        <input type='text' placeholder='Email or mobile number' className='p-4 my-4 w-full rounded-md bg-black bg-opacity-65 border border-s-white'></input>
        <input type='text' placeholder='Password' className='p-4 my-4 w-full rounded-md bg-black bg-opacity-65 border border-s-white'></input>   
        <button className='p-6 my-6 bg-red-700 w-full rounded-md'>{isSignUpForm ? "Sign Up" : "Sign In"}</button>
        <p className='py-4 cursor-pointer hover:font-black' onClick={toggleSignUpForm}>
        {isSignUpForm ? "Are you new to Netflix? Sign Up Now" : "Already Regostered? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login
