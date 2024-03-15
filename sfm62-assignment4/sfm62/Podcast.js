import React from 'react';

//Using Structured Props
export default function Podcast(props) {

        let season = props.season
        let episode = props.episode
        let episodeTitle = props.episodeTitle
        let onDoubleClick = props.onDoubleClick

        return(
            <div onDoubleClick={() => onDoubleClick(props.episodeTitle)}>
                <h2 style={{color:"blue"}}>Episode Title: {props.episodeTitle}</h2>
                <p>Season: {props.season}</p>
                <p>Episode: {props.episode}</p>
                <br></br>

            </div>
        );

    }



