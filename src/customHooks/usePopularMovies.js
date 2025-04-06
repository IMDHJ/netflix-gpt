import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { TMDB_API_GET_OPTION } from '../utils/constats';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async  () => {
      //const data = null;
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', TMDB_API_GET_OPTION)
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
    }
  
    useEffect( () => {
      getPopularMovies();
    },[])
}

export default usePopularMovies
