import './App.css';
import React from 'react';
import NavBar from './componemts/navBar/navBar';
import {orginals,action,comedyMovies,actionMovies,romanceMovies,trending,horrorMovies,documentaries} from './urls'
import Banner from './componemts/Banner/Banner';
import Rowpost from './componemts/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <br />
      <Rowpost url={orginals} title='Netflix Orginals' />
      <Rowpost url={action} title='Action' isSmall />
      <Rowpost url={trending} title='Trending' isSmall />
      <Rowpost url={comedyMovies} title='Comedy Movies' isSmall />
      <Rowpost url={romanceMovies} title='Romance Movies' isSmall />
      <Rowpost url={horrorMovies} title='Horror Movies' isSmall />
      <Rowpost url={actionMovies} title='Action Movies' isSmall />
      <Rowpost url={documentaries} title='Documetaries' isSmall />
    </div>
  );
}

export default App;
