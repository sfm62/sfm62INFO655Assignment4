import Song from './Song';
import React,{ useState, useEffect } from "react"
import Podcast from './Podcast';
import Shuffle from './Shuffle';
import Previous from './Previous';
import Next from './Next';
import Pause from './Pause';
import Status from './StatusComponent';

//This will serve to parse the data as either a podcast or a song from the read in data
//#2 Read in Data
function determineType(item){
    if((item.artist && item.year) || (item.artist && item.year && item.title) || (item.year && item.title) || (item.year && item.title) || (item.artist && item.title)) {
        return 'song';
    } else if ((item.season && item.episode && item.episodeTitle) || (item.season && item.episode) || (item.episode && item.episodeTitle) || (item.season && item.episodeTitle)){
        return 'podcast';
    } else {
        return 'neither';
    }
}

    function Playlist(){

        const [types, setTypes] = useState({ songs: [], podcasts: []});
        const [SIndex, setSIndex] = useState(0);
        const [CIndex, setCIndex] = useState(0);
        const [currentTrack, setCurrentTrack] = useState("");
        //combined array for playlist prev/next
        const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
        const [isPlaying, setIsPlaying] = useState(false);
        const [allTracks, setAllTracks] = useState([]);

        const hDoubleClick = (title => {
            setCurrentTrack(title);
        });


        // #2 Read in Data
        useEffect(() => {
            Promise.all([
            fetch("http://localhost:3001/0").then(response => response.json()),
            fetch("http://localhost:3001/1").then(response => response.json()),
            fetch("http://localhost:3001/2").then(response => response.json()),
            fetch("http://localhost:3001/3").then(response => response.json()),
            fetch("http://localhost:3001/4").then(response => response.json()),
            fetch("http://localhost:3001/5").then(response => response.json()),
            fetch("http://localhost:3001/6").then(response => response.json()),
            fetch("http://localhost:3001/7").then(response => response.json()),
            fetch("http://localhost:3001/8").then(response => response.json()),
            fetch("http://localhost:3001/9").then(response => response.json()),
            fetch("http://localhost:3001/10").then(response => response.json()),
            fetch("http://localhost:3001/11").then(response => response.json()),
            fetch("http://localhost:3001/12").then(response => response.json()),
            fetch("http://localhost:3001/13").then(response => response.json()),
        
            ])
            .then(data => {
            
                       
             const filteredData = data.map(item => ({
                ...item, type: determineType(item)
             }));

             const songs = filteredData.filter(item => item.type === 'song');
             const podcasts = filteredData.filter(item => item.type === 'podcast');
             setTypes({ songs, podcasts });
            })
            .catch(error => console.error("Fetching Error for Songs: ", error));
            
            }, []);

            useEffect(() => {

             const combinedArray = [...types.songs, ...types.podcasts].map(item => ({
                ...item, title: item.title || item.episodeTitle

             }));

             console.log("Setting Alltracks: ", combinedArray);
             setAllTracks(combinedArray);

            }, [types]);
            

       
        //Button functionality #4(Display State/Status)
            const goNext = () => {
                const nextIndex = (currentTrackIndex + 1) % allTracks.length;
                console.log(`Going to next track: ${allTracks[nextIndex]?.title || ""}`);
                setCurrentTrackIndex(nextIndex);
                setCurrentTrack(allTracks[nextIndex]?.title || "");
                setIsPlaying(true);
            };

            const goPrev = () => {
                const prevIndex = (currentTrackIndex - 1 + allTracks.length) % allTracks.length;
                setCurrentTrackIndex(prevIndex);
                setCurrentTrack(allTracks[prevIndex]?.title || "")
                setIsPlaying(true);
            };

            const toggle = () => {
                setIsPlaying(!isPlaying);
            };



        //Create a shuffle array method for both podcasts and songs (#5 Mix it Up)
        //Method that will perform the actual shuffle
        const arrayShuffle = (array) => { 
            
            for (let i = array.length - 1; i > 0; i--) {

                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];

                }
                return array;
        }
        //Shuffle the read in data without reloading the page
        const ShuffleTypes = () => {

           const songShuffle = arrayShuffle([...types.songs]);
           const podcastShuffle = arrayShuffle([...types.podcasts]);       
           
           setTypes({ songs: songShuffle, podcasts: podcastShuffle});
           setCIndex(0);
           setSIndex(0);
        }
     
        return (
            
            <div>
                 <br></br>
                {/* <Status playTitle={isPlaying ? `Playing: ${allTracks[currentTrackIndex]?.title}` : "Paused"}/> */}
                <Status isPlaying={isPlaying} playTitle={currentTrack}/>
                <br></br>
                <Previous performPrevious={goPrev}/>
                <Next performNext={goNext}/>
                <br></br>
                <br></br>
                <Shuffle performShuffle={ShuffleTypes}/>
                <Pause performPlayPause={toggle}/>
               
                <h1>Songs</h1>
                {types.songs.map((song, index) => (
                    <Song key={index} {...song} onDoubleClick={() => hDoubleClick(song.title)}/>
                ))}

                <h1>Podcasts</h1>
                {types.podcasts.map((podcast, index) => (
                    <Podcast key={index} {...podcast} onDoubleClick={() => hDoubleClick(podcast.episodeTitle)}/>
                ))}
      
            </div>
        );


    }
    


export default Playlist;