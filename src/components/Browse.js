import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
const showGPTSearch = useSelector(store => store.gpt.showGPTSearch)

  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      {showGPTSearch ?
        <GPTSearch/> : 
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse
