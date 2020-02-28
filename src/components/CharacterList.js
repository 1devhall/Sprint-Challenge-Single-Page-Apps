import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data.results);
      setChar(res.data.results)
    })
    .catch(error => {
      console.log('Error!', error);
    })
  }, []);

  return (
    <section className="character-list">
      {char.map(chars => {
        return (
        <CharacterCard
        key={chars.id}
        name = {chars.name}
        species = {chars.species}
        />
        )
        })} 
    
    </section>
  );
}