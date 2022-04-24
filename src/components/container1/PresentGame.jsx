import React from 'react'
import videoAlienAttack from "../../img/videos/AlienAttackVideo.mp4"
import "./presentGame.css"


const PresentGame = () => {


    return (
        <div className='container1'>

            <div className="blurVideoFront"></div>
            <div className="blurVideoLeft"></div>
            
            <div className="container1-video">
                <video src={videoAlienAttack} controls preload="none" controlsList= "nodownload noremoteplayback noplaybackrate foobar " autoPlay loop muted  ></video>
            </div>

            <div className="blurVideoRight"></div>
            <div className="blurVideo"></div>


        </div>
    )
    
}

export default PresentGame;