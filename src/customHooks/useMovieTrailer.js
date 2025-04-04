import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { TMDB_API_GET_OPTION } from '../utils/constats';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();

    const getMovieVideos = async () => {

    const url = "https://api.themoviedb.org/3/movie/" +movieId+"/videos?language=en-US"
    const data = await fetch(url,TMDB_API_GET_OPTION)
    const json = await data.json();

    const filteredData = json.results.filter( video => video.type = "Trailer")

    const trailer = filteredData.length ? filteredData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer))
  }

  useEffect(() => {
    getMovieVideos();
  },[])
}

export default useMovieTrailer
