import React, {useState} from 'react'

export default function SearchBar(props) {

  const [form, setForm] = useState('')



  return (
    <div>
    <input type="text" value = {form} onChange={(e)=> setForm(e.target.value)}/>
    <button onClick={()=> props.setSearchTerm(form)}>Search</button>

    </div>
  )
}
