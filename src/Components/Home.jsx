import React from 'react'
import NavBar from './NavBar'
import List from './List'
import Cards from './Cards';

function Home() {
  return (
    <div>
        <h1>Soy el Home</h1>
        <NavBar />
        <Cards />
        <List />

    </div>
  )
}

export default Home