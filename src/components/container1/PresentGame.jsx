import React, {useEffect} from 'react'
import videoAlienAttack from "../../img/videos/AlienAttackVideo.mp4"
import "./presentGame.css"
import presentGameEffects from './presentGameEffects'


const PresentGame = () => {

    useEffect(()=>{
        presentGameEffects()
    },[])

    return (
        <div className='container1'>

            <div className="blurVideoFront"></div>
            <div className="blurVideoLeft"></div>
            
            <div className="container1-video">
                <video src={videoAlienAttack}  preload="none" autoPlay loop muted  ></video>
            </div>

            

            <div className="textPresent">
                <p>
                Welcome to the world of AlienAttack, a multiplayer strategy game where you have to acquire only one character and fight against other people.
                Inside the map you can find hidden tokens, you will be able to earn tokens by eliminating your opponents and level up your character.
                With the tokens you can buy Stats and thus increase the potential of your champion! Compete against your friends in custom tournaments and earn customization emblems!
                </p>
            </div>
        </div>
    )
    
}

export default PresentGame;