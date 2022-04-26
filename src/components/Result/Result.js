import React from 'react';
import './result.css'

const Result = (props) => {

    return (
        <div className='Result'>
            <button className='resultButton'>{props.results.name}</button>
            <div className='imageContainer'>
               <img src={props.results.thumbnail} alt=''></img> 
            </div>     
        </div>
    )
}

export default Result