import React, { useState } from 'react';
import Tasty from '../Util/util';

const Search = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTag, setSearchTag] = useState('');

    const onChange = (e) => {
        if (e.target.name === 'term') {
      setSearchTerm(e.target.value)
    } else if (e.target.name === 'tag') {
        setSearchTag(e.target.value)
    }
    };
  
    async function search() {
      let results = await Tasty.search(searchTag, searchTerm);
      props.setSearch(results)
    };

    async function log() {
        console.log(props.searchResults.map(result => result.name))
    }

    return (
        <div>
          <form>
            <input type='text' value={searchTerm} onChange={onChange} placeholder='Ingredient or Recipe' name='term' />
            <br></br>
            <input type='text' value={searchTag} onChange={onChange} placeholder='Tags' name='tag' />
          </form>
          <button onClick={search}>Search</button>
          <button onClick={log}>Log</button>
        </div>
      );
}

export default Search