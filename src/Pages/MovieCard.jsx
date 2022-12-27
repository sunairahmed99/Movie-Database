import React from 'react';
import './Moviecard.css';
import { Link } from "react-router-dom";


function MovieCard(props) {
    const {data} = props
    let id = data.imdbID;
    
  return (
    
    <div className='moviecard'>
        <Link to={`movies/${id}`}>
    
    
        <div className='box'>
            <div className='img'>
                <img src={data.Poster} alt="" />
                
                <div className='txt'>
                    <span>{data.Title}</span>
                    <span>{data.Type}</span>
                    <span>{data.Year}</span>

                </div>

            </div>

        </div>
        </Link>
        

    </div>
  )
}
export default MovieCard;
