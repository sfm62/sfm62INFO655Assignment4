//#4 Displat State / Status

function Status ({ isPlaying, playTitle }){
    return(
        <div>
            {isPlaying ? `Playing: ${playTitle}` : "Paused"}
        </div>
    );
}
export default Status;