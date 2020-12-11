import './App.css';
import React, {useState, useEffect} from 'react'
import CharacterList from "./components/CharacterList"
import SearchBar from "./components/SearchBar"
import axios from 'axios'

const filterCharacters = (searchTerm) =>  {
 const char = characters.filter((el) =>{
   el.name.toLowerCase().includes(searchTerm.toLowerCase())
 } )
 return char
}


function App() {

  const handleChange = async(e) => {
    if (!e.target.value){
      setSearchTerm('')
    }
    const char = await searchTerm(e.target.value)
    searchTerm(e.target.value,char)
  }


  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
  axios.get('https://rickandmortyapi.com/api/character')
  .then(res => {
    setCharacters(res.data.results)
  })
  },[])

  return (
    <div>
    <SearchBar characters={characters}/>
    <CharacterList characters = {characters}/>
    </div>
  );
}

export default App;
