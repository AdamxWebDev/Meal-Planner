import React from 'react';
import Result from '../Result/Result';
import '../Results/Results.css';

const Results = (props) => {
     return (
       <div>
           <h1 style={{textAlign: 'center'}}>Recipes</h1>
           <div className='recipes'>
               {
                    props.searchResults.map((entry, i) => (
                    <Result results={entry} key={i}/>
                    ))
                }
           </div>         
       </div>
     );
}

export default Results