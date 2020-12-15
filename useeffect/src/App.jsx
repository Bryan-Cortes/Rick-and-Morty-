import './App.css';
import React, {useState, useEffect} from 'react'
import CharacterList from "./components/CharacterList"
import SearchBar from "./components/SearchBar"
import LocationList from './components/LocationList'
import {Route, Link,} from 'react-router-dom'
import axios from 'axios'




function App() {




  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [locations, setLocations] = useState([])

  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    setCharacters(res.data.results.filter((el)=> el.name.toLowerCase().includes(searchTerm.toLowerCase())))

  })
  },[searchTerm])

  useEffect(()=> {
    axios.get('https://rickandmortyapi.com/api/location')
    .then(res => {

      setLocations(res.data.results)

    })
  },[])


  return (
    <div>
    <nav>
    <Link to="/characters">Characters</Link>
    <Link to="/locations">Locations</Link>
    </nav>
    <Route path="/characters">
    <SearchBar setSearchTerm={setSearchTerm}/>
    <CharacterList characters = {characters}/>
    </Route>
    <Route path="/locations">
    <LocationList locations={locations}/>
    </Route>
    </div>
  );
}

export default App;
