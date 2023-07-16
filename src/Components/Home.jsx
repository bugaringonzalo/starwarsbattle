import React from 'react'
import NavBar from './NavBar'
import List from './List'
import Cards from './Cards';
import "./Home.css";

function Home() {
  return (
    <div>
        <div className='home'>
            <NavBar />
            <Cards />
        </div>
        
        <div className='list'>
            <List />
        </div>
    </div>
  )
}

export default Home