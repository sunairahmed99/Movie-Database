import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { getall, getallshows } from './Movieslice';
import './Moviecard.css';

function Movielisting() {
    const movies = useSelector(getall);
    const shows = useSelector(getallshows);

    let rendermovies, rendershows = ''

    rendermovies = movies.Response ==='True' ? (
        movies.Search.map((item, index)=>{
            return(
                <MovieCard key={index} data = {item}/>

            )
           

        })
    ) 
    : (<div>console.log(err)</div>)

    rendershows = shows.Response ==='True' ? (
        shows.Search.map((item, index)=>{
            return(
                <MovieCard key={index} data = {item}/>

            )
           

        })
    ) 
    : (<div>console.log(err)</div>)
    
       
    
  return (
    <div className='container main'>
        <h1>Movies</h1>
        <div className='rendermovies'>
        {rendermovies}
        </div>
        <div>
            <h1>Shows</h1>

        <div className='rendershows'>
            {rendershows}

        </div>

        </div>
        
       
    </div>
  )
}
export default Movielisting;
