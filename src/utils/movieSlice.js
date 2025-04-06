import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        trailerVideos: null,
        popularMovies : null
    },
    reducers:{
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo :(state, action) => {
            state.trailerVideos = action.payload
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies} = movieSlice.actions;
export default movieSlice.reducer;