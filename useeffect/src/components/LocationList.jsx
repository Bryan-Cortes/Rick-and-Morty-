import React from 'react'
import LocationCard from './LocationCard'

export default function LocationList(props) {

 const {locations} = props;
  return (
    <div>
      {locations.map((location) => {
        return <LocationCard key={location.id} location = {location}/>
      })}
    </div>
  )
}
