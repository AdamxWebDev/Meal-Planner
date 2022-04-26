import React from 'react';
import './result.css'

const Result = (props) => {

    const onClick = () => {
        props.setHiddenState('none')
        props.setShowDescription('contents')
        props.setDescriptionResult(props.results)
        props.setDefaultObjState(true)
    }

    return (
        <div className='Result'>
            <button className='resultButton' onClick={onClick}>{props.results.name}</button>
            <div className='imageContainer'>
               <img src={props.results.thumbnail} alt=''></img> 
            </div>     
        </div>
    )
}

export default Result