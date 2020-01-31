import React, {useState} from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import WelcomePage from './components/WelcomePage'
import SearchForm from "./components/SearchForm";
import {Route, Link} from 'react-router-dom'

export default function App() {
  return (
    <main>
      <nav>
        <Link to= "/">Home</Link>
        <Link to="/character-list">Characters</Link>
        <Link to='search'> Search</Link>
      </nav>
       <Header />
      
      <Route exact path= '/' component = {WelcomePage} />
      <Route path= '/character-list'>
        <CharacterList />
      </Route>
      <Route path= '/search'>
        <SearchForm />
      </Route>
      
    </main>
  );
}
