import './App.css';
import React, {useState} from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';

const App = () => {

  const [searchResults, setSearchResults] = useState([]);

  const setSearch = (results) => {
    setSearchResults(results)
  }


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Meal Planner
      </h1>
      <Search setSearch={setSearch} searchResults={searchResults}/>
      <Results searchResults={searchResults}/>      
    </div>
  );
}

export default App;
