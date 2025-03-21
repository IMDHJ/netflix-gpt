import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const[isSignUpForm, setIsSignUpForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignUpForm = () =>{
        setIsSignUpForm(!isSignUpForm)
    };

    const handleButtonClick = () => {
        //Validate the form Data
       const message = validateData(email.current.value,password.current.value)
       setErrorMessage(message)
       if(message) return

       //SignIn or SignUp
       if(isSignUpForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {         
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/33377912?v=4"
          })
            .then(() => {
              console.log(user)
              const {uid, email, displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.code + "-" + errorMessage);
            })
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
       }
       else{
          //Sign In Logic
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Signed-in user", user);
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
       }

    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg'
            alt='logo'
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-48 mx-auto right-0 left-0 text-white bg-opacity-80'>   
        <h1 className='font-bold text-3xl py-4'>{isSignUpForm ? "Sign Up" : "Sign In"}</h1>       
        {isSignUpForm && <input ref={name} type='text' placeholder='Name' className='p-4 my-4 w-full rounded-md bg-black bg-opacity-65 border border-s-white'></input>}
        <input ref = {email} type='text' placeholder='Email or mobile number'  className='p-4 my-4 w-full rounded-md bg-black bg-opacity-65 border border-s-white'></input>
        <input ref = {password} type='password' placeholder='Password' className='p-4 my-4 w-full rounded-md bg-black bg-opacity-65 border border-s-white'></input>   
        <p className='text-red-500  text-lg '>{errorMessage}</p>
        
        <button className='p-6 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>{isSignUpForm ? "Sign Up" : "Sign In"}</button>
        <p className='py-4 cursor-pointer hover:font-black' onClick={toggleSignUpForm}>
        {isSignUpForm ? "Are you new to Netflix? Sign Up Now" : "Already Regostered? Sign In Now"} </p>
      </form>
    </div>
  )
}

export default Login
