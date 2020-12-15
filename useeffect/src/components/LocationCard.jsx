import React from 'react'

export default function LocationCard(props) {

  const {location} = props;
  return (
    <div>
     <h2>{location.name}</h2>

    </div>
  )
}
