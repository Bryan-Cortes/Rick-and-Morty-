import './App.css';
import React, {useState, useEffect} from 'react'
import CharacterList from "./components/CharacterList"
import SearchBar from "./components/SearchBar"
import axios from 'axios'




function App() {




  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    setCharacters(res.data.results.filter((el)=> el.name.toLowerCase().includes(searchTerm.toLowerCase())))

  })
  },[searchTerm])

  return (
    <div>
    <SearchBar setSearchTerm={setSearchTerm}/>
    <CharacterList characters = {characters}/>
    </div>
  );
}

export default App;
