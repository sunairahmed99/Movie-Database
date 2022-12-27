import React from 'react';
import './Header.css';
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux';
import { fetchmovies, fetchshows } from '../Pages/Movieslice';

function Header() {
  const dispatch = useDispatch()
  const[text, settext] = useState('')
  const handle = (e)=>{
    if(text === '') return alert("please search movies or shows")
    e.preventDefault();
    console.log(text)
    dispatch(fetchmovies(text))
    dispatch(fetchshows(text))
    settext("")

  }
  const change = (e)=>{
    settext(e.target.value)
  }
  
  return (
    <section className='header'>
        <div className='container'>
            <div>
                <h1>Redux Movie Project</h1>
            </div>
            <div>
                <h1>Created By Sunair</h1>
            </div>
        </div>
        <div className='search'>
          <form  onSubmit={handle}>
            <input type="text" placeholder='search here' value={text} onChange={change}/>
            <span><i class="ri-search-line"></i></span>
          </form>

        </div>

    </section>
  )
}
export default Header;
