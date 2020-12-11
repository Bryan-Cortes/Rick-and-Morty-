import React from "react";

export default function CharacterCard(props) {
  const { character } = props;
  console.log(props);
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>{character.gender}</p>
      <p>{character.origin.name}</p>
      <p>{character.species}</p>
      <p>{character.status}</p>
    </div>
  );
}
