import react, {useEffect, useState} from "react";
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

import Login from "./components/login/Login";
import { getTokenFromUrl } from "./components/spotify/spotify";

import Player from "./components/player/Player";


const spotify = new SpotifyWebApi();

const App = ()=>{
    const [{user, token}, dispatch] = useDataLayerValue();

    useEffect(()=>{
        const hash = getTokenFromUrl();
        window.location.hash="";
        const _token = hash.access_token;

        if(_token){

            dispatch({
                type:'SET_TOKEN',
                token:_token,
            })

            spotify.setAccessToken(_token);

            spotify.getMe().then(user=>{
                dispatch({
                    type:'SET_USER',
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists)=>{
                dispatch({
                    type:'SET_PLAYLISTS',
                    playlists:playlists,
                });
                console.log(playlists);
            });

            spotify.getPlaylist('37i9dQZEVXcFUzhvYQ0P5b').then((response)=>{
                dispatch({
                    type:'SET_DISCOVER_WEEKLY',
                    discover_weekly:response,
                })
            });
        }
    },[]);

    console.log('TOKEN =',token);

    return(
        <>
            <div className='app'>
                {!token && <Login/>}
                {token && <Player spotify={spotify}/>}
            </div>
           
        </>
    )
}

export default App;