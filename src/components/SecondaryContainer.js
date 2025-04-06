import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
    <div className='-mt-52 pl-12 relative z-20'>
      <MovieList title={"Now Playing"} moviesData = {movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} moviesData = {movies.popularMovies}/>
      <MovieList title={"Bollywood"} moviesData = {movies.nowPlayingMovies}/>
      <MovieList title={"Hollywood"} moviesData = {movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} moviesData = {movies.nowPlayingMovies}/>
    </div>    
    </div>
  )
}

export default SecondaryContainer
