import React, {useState, useEffect} from 'react';

//Using Detructured Props
function Song({ artist, title, year, onDoubleClick }){

    return(
        <div onDoubleClick={() => onDoubleClick(title)}>
            
            <h2>{title} by {artist}</h2>
            <p>Year: {year}</p>
            <br></br>
           
        </div>
    );

 
}
export default Song;
 



