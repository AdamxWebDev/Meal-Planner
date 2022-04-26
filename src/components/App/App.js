import './App.css';
import React, {useState, useEffect} from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Description from '../Description/Description';

const App = () => {

  let defaultObj = {
    name: '',
    instructions: '',
    yields: '',
    originalVideo: '',
    prepTime: '',
    totalTime: [{display_tier: ''}, {}],
    thumbnail: '',
    supplies: '',
};



  const [searchResults, setSearchResults] = useState([]);
  const [hiddenState, setHiddenState] = useState('contents');
  const [showDescription, setShowDescription] = useState('none');
  const [descriptionResult, setDescriptionResult] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true);
  const [defaultObjState, setDefaultObjState] = useState(false);

  const setSearch = (results) => {
    setSearchResults(results)
  };

  useEffect(() => {
    if (firstLoad === true) {
      setHiddenState('none');
      setFirstLoad(false);
    };
    if (hiddenState === 'none' && firstLoad === false) {
      setHiddenState('contents')
    };
  }, [searchResults]);


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        Meal Planner
      </h1>
      <Search 
              setSearch={setSearch} 
              searchResults={searchResults} 
              setHiddenState={setHiddenState} 
              hiddenState={hiddenState}
      />
      <Results 
              searchResults={searchResults} 
              hiddenState={hiddenState} 
              setHiddenState={setHiddenState} 
              setShowDescription={setShowDescription} 
              setDescriptionResult={setDescriptionResult}
              setDefaultObjState={setDefaultObjState}
      />   
      <Description 
                  searchResults={searchResults} 
                  showDescription={showDescription} 
                  descriptionResult={descriptionResult} 
                  firstLoad={firstLoad}
                  defaultObj={defaultObj}
                  defaultObjState={defaultObjState}
                  setDefaultObjState={setDefaultObjState}
      />
    </div>
  );
};

export default App;
