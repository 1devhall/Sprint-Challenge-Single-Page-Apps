import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function SearchForm(props) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
    .then(res => {
      const info = res.data.results;
      const charac = info.filter(chara => chara.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(charac)
    });
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  }
  return (
    <section className="search">
      <form>
        <input
        type='text'
        onChange={handleInputChange}
        value={query}
        name='name'
        tabIndex='0'
        placeholder='Search Character'
        />
      </form>
      <div>
      {data.map(chara => {
        return (
        <CharacterCard
        key={chara.id}
        name = {chara.name}
        species = {chara.species}
        />
        )
        })} 
      </div>
    </section>
  );
}
