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

            <div class="text middle" data-text="Welcome to the world of AlienAttack!">Welcome to the world of AlienAttack!</div>

            <div className="textPresent">
                <p>
                A multiplayer strategy game where you have to acquire only one character and fight against other people.
                Inside the map you can find hidden tokens, you will be able to earn tokens by eliminating your opponents and level up your character.
                With the tokens you can buy Stats and thus increase the potential of your champion! Compete against your friends in custom tournaments and earn customization emblems!
                </p>
            </div>

            <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
        </div>
    )
    
}

export default PresentGame;