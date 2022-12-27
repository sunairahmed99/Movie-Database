import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Movielisting from './Movielisting';
import { fetchloader, fetchmovies, fetchshows, loader } from './Movieslice';

function Home() {
  const load = useSelector(loader)
  console.log(load)
  
    const dispatch = useDispatch();
    useEffect(()=>{
      const search = 'Harry';
      const search1 = 'friends';
      dispatch(fetchmovies(search))
      dispatch(fetchshows(search1))
      dispatch(fetchloader())
      
      
       
        
       

    }, [dispatch])
  return (
    <section>
        <Movielisting/>
        
    </section>
  )
}
export default Home;
