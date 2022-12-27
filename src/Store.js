import {configureStore} from '@reduxjs/toolkit';
import MovieSlice from './Pages/Movieslice';

export const Store = configureStore({
    reducer:{
        movies: MovieSlice
    }
})