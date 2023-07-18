import Home from './Components/Home.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [characters, setCharacters] = useState([]);

  async function getAllCharacters () {
    const allData = await axios.get(
      'https://akabab.github.io/starwars-api/api/all.json'
    );
  // console.log(allData.data);
  setCharacters(allData.data);
  }

  useEffect (() => {
    getAllCharacters();
  },[])


  return (
    <div className="App">
      <Home allCharacters={characters} />
    </div>
  );
}

export default App;
