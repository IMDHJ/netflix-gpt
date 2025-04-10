import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constats'
import { toggleGPTSearchView } from '../utils/gptSlice'
import { changeLanguagePreference } from '../utils/configSlice'

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const user = useSelector(store => store.user)
  const showGptSearch = useSelector(store => store.gpt?.showGPTSearch);

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user){
            const {uid, email, displayName,photoURL} = user;
            dispatch(addUser({uid: uid, email: email, displayName: displayName,photoURL: photoURL}));
            navigate("/browse")
          }
          else{
            dispatch(removeUser());
            navigate("/")
          }
        });

        return () => {
          unsubscribe();
        }
      },[])

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguagePreference(e.target.value))
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img className='w-56' src={NETFLIX_LOGO}
        alt='netflix-logo' 
      />
      {user && <div className='flex p-2'>
       {showGptSearch &&  <select onChange={handleLanguageChange} className='p-2 m-2 bg-gray-900 text-white rounded-lg w-36 h-16'>
          {SUPPORTED_LANGUAGES.map((language) => (
            <option key={language.identifier} value={language.identifier}>{language.name}</option>
          ))}
        </select>
       }
        <button onClick={handleGPTSearch} className='h-16 w-36 py-2 px-4 m-2 bg-purple-800 text-white rounded-lg'>
         {showGptSearch ? "Home Page" :"GPT Search"}</button>
        <img className='w-12 h-12 my-4'
         src = {user?.photoURL} 
        alt='user-logo'></img>
        <button className='font-bold text-white p-2 m-2' onClick={handleSignOut}>Sign-Out</button>
      </div>}
    </div>
  )
}

export default Header
