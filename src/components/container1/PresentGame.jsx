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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima nemo beatae, explicabo, ipsum ipsam incidunt hic dolores quaerat dolorem voluptas sunt necessitatibus iste enim possimus, amet sequi nisi cupiditate ut.
                Quod, nam. Repudiandae maxime quod repellendus necessitatibus nisi quos? Ipsam quos adipisci sequi officiis aliquid quo assumenda beatae amet voluptatibus atque. Recusandae dignissimos ex laboriosam officia molestias libero ad exercitationem.
                </p>
            </div>
        </div>
    )
    
}

export default PresentGame;