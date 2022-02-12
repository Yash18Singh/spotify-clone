import react from "react";
import './Player.css';
import  Sidebar  from "../sidebar/Sidebar";
import Body from "../body/Body";
import Footer from "../footer/Footer";

const Player = ({spotify})=>{
    document.title='SPOTIFY'
    return(
        <>
            <div className='player'>

                <div className='player__body'>
                    <Sidebar/>
                    <Body spotify={spotify}/>
                </div>

                <Footer/>
            </div>
        </>
    )
}

export default Player;