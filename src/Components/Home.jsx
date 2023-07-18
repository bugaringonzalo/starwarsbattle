import React, { useState } from 'react'
import NavBar from './NavBar'
import List from './List'
import Cards from './Cards';
import "./Home.css";

function Home({allCharacters}) {

  // console.log(allCharacters);
  const [chars, setChars] = useState ({
    cardLeft: {},
    cardRight: {},
  });
  const [listC, setList] = useState([]);

  const search = (name, cardLocation) => {
    const findCharacter = allCharacters.find((c) => c.name === name)
    if (cardLocation === 'left') {
      setChars({...chars, cardLeft : findCharacter})
    } 
    if (cardLocation === 'right') {
      setChars({...chars, cardRight: findCharacter})
    }
    console.log(chars)
  };

  const addList = () => {
    if (listC.length === 0) {
      setList(allCharacters)
    } else {
      setList([])
    }
  };

  const random = (cardLocation) => {
    function getNumRandom (max) {
      return Math.floor(Math.random()*max)
    }
    const idRandom = getNumRandom(87) + 1;
    const findCharacter = allCharacters.find((c) => c.id === idRandom)
    if (cardLocation === 'left') {
      setChars({...chars, cardLeft : findCharacter})
    } 
    if (cardLocation === 'right') {
      setChars({...chars, cardRight: findCharacter})
    }

  };

  return (
    <div>
        <div className='home'>
            <NavBar search = {search} addList = {addList}  random = {random} />
            <h3>Star Wars Battle</h3>
            <Cards characters={chars} />
        </div>
        
        <div className='list'>
            <List lista = {listC} />
        </div>
    </div>
  )
}

export default Home