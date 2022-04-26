import React, { useState, useEffect } from 'react';
import '../Description/Description.css'
import defaultObj from './defaultObj'

const Description = (props) => {

    const [results, setResults] = useState(defaultObj);
    
     useEffect(() => {
         if (props.defaultObjState === true) {
             setResults(props.descriptionResult);
             props.setDefaultObjState(false);
         }
     }, [props.defaultObjState])
     
    

    return (
        <div style={{display: props.showDescription}}>
            <h1>{results.name}</h1>
            <img className='descriptionImg' alt='' src={results.thumbnail}></img>
            <ul>
                <li>Prep time: {results.prepTime ? results.prepTime : results.totalTime.display_tier}</li>
                <li>Total time: {results.totalTime.display_tier}</li>
                <li>{results.yields}</li>
            </ul>
            <h2>Ingredients</h2>
            <ul>
                
            </ul>
        </div>
    )
}

export default Description