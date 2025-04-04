import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { TMDB_API_GET_OPTION } from '../utils/constats';

const useNowPlayingMovies = () => {
  
    const dispatch = useDispatch();

    const getNowPlayingMovies = async  () => {
      //const data = null;
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_API_GET_OPTION)
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect( () => {
      getNowPlayingMovies();
    },[])
  
}

export default useNowPlayingMovies
