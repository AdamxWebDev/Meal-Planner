import React from 'react';
import Result from '../Result/Result';
import '../Results/Results.css';

const Results = (props) => {
     return (
       <div style={{display: props.hiddenState}}>
           <h1 style={{textAlign: 'center'}}>Recipes</h1>
           <div className='recipes'>
               {
                    props.searchResults.map((entry, i) => (
                    <Result 
                            results={entry} 
                            key={i} 
                            setHiddenState={props.setHiddenState} 
                            setShowDescription={props.setShowDescription} 
                            setDescriptionResult={props.setDescriptionResult}
                            setDefaultObjState={props.setDefaultObjState}
                    />
                    ))
                }
           </div>         
       </div>
     );
}

export default Results