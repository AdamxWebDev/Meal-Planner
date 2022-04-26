import React from 'react';
import Result from '../Result/Result';

const Results = (props) => {
     return (
       <div>
         {
         Object.entries(props.searchResults).map((entry, i) => {
            return <Result results={entry} key={i}/>
        }
         )
         }
       </div>
     );
}

export default Results