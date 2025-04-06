import React from 'react'
import { TMDB_IMG_CDN_URL } from '../utils/constats'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt ="Movie Card" src={TMDB_IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard
