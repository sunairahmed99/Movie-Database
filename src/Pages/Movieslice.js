import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchmovies = createAsyncThunk('movies/fetchmovies', async(text)=>{
    let api_key = 'be2e201d'
    const response = await  axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${text}`);
    return (response.data)
})
export const fetchshows = createAsyncThunk('shows/fetchshows', async(text)=>{
    let api_key = 'be2e201d'
    const response = await  axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${text}&type=series`);
    return (response.data)
})
export const fetchmovieid = createAsyncThunk('movieid/fetchmovieid', async(id)=>{
    let api_key = 'be2e201d'
    const response = await  axios.get(`http://www.omdbapi.com/?apikey=${api_key}&i=${id}&Plot=full`);
    return (response.data)
})
export const fetchloader = createAsyncThunk('loader/fetchloader', async(text)=>{
    let api_key = 'be2e201d'
    const response = await  axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=${text}`);
    return (response.data)
})


const initialState = {
    movies: {},
    shows: {},
    movieid: {},
    loader: {
     isloading: false,
    },
    
}

export const Movieslice = createSlice({
    name: "movies",
    initialState,

    reducers:{
        clearallmovies: (state)=>{
            state.movieid = {}
        }
       
        
    },
    extraReducers:{
        [fetchmovies.pending]:()=>{
            console.log('pending')
        },
        [fetchmovies.fulfilled]:(state, {payload})=>{
            state.movies = payload
        },
        [fetchmovies.rejected]:()=>{
            console.log('rejected')
        },
        [fetchshows.fulfilled]:(state, {payload})=>{
            state.shows = payload
        },
        [fetchmovieid.fulfilled]:(state, {payload})=>{
            state.movieid = payload
        },
        [fetchloader.pending]:(state)=>{
            console.log('pendinnggggggggggg')
            if( state.isloading = false) return <div style={{color: "red"}}>.....loadinggg</div>
           
        },
        [fetchloader.fulfilled]:(state)=>{
            console.log('fulfilledz')
            state.isloading = true
        }
       
    }
})
export const {clearallmovies} =  Movieslice.actions;
export const getall = (state)=> state.movies.movies;
export const gatmovies = (state)=>state.movies.movies;
export const getallshows = (state)=>state.movies.shows;
export const movieid = (state)=>state.movies.movieid;
export const loader = (state)=>state.movies.loader;
export default Movieslice.reducer;