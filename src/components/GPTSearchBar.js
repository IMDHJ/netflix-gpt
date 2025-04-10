import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

  const preferredLanguage = useSelector(store => store.config?.languagePreference)

    const handleSearch= () => {
        console.log("handle Search")
    }
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input type='text' placeholder={lang[preferredLanguage].gptSearchPlaceHolder} className='p-4 m-4 col-span-9'></input>
        <button onClick={handleSearch} className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4'>{lang[preferredLanguage].search}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar
