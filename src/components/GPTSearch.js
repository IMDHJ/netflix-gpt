import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { NETFLIX_BACKGROUND } from '../utils/constats'

const GPTSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
              <img src={NETFLIX_BACKGROUND}
                  alt='backgroundImage'
              />
            </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
