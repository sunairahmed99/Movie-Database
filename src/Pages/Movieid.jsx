import React from 'react'
import './Movieid.css';
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {clearallmovies, fetchmovieid, movieid } from './Movieslice';
import {useParams} from 'react-router';



function Movieid() {
    const {imdbID} = useParams()
    const idd = useSelector(movieid)
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchmovieid(imdbID))
        return()=>{
            dispatch(clearallmovies())
        }
        

    },[dispatch, imdbID])
  return (

    <div>
        {Object.keys(idd).length === 0? (<div style={{color: 'red'}}><h1>Loadinggg....</h1></div>):(
            <div>
                <div className='movieid'>
                <div className='movietxt'>
                <h2>{idd.Title}</h2>
                <h4>{idd.Year}</h4>
                <h4>{idd.Released}</h4>
                <h4>{idd.Director}</h4>
                <h4>{idd.Writer}</h4>
                <h4>{idd.Actors}</h4>
                <h4>{idd.country}</h4>
                <h4>{idd.Language}</h4>
                <h4>{idd.Awards}</h4>
                    </div>
                    <div className='movieimg'>
                        <img src={idd.Poster} alt="" />
                    </div>

                </div>
    

            </div>
            

        )}
        
        </div>
  )
}
export default Movieid
