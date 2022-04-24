import React, {useEffect} from 'react'
import backgroundPasillo from  "../../img/backgroundPasillo1.png"
import backgroundCharacter from "../../img/backgroundCharacter22.jpg"
import SliderCharacter from './slider/SliderCharacter'
import sceneEffects from './sceneEffects'

const Container2Scene = () => {

    useEffect(() =>{
        sceneEffects()

    },[])


    return (
        <div className='container2'>

            <div className='container2-pasillo'>
                <img src={backgroundPasillo} alt="Pasillo" ></img>
            </div>

            <div id="slider" className='container2-character'>
                <div className="container2Background">
                    <img src={backgroundCharacter} alt="scene characters" ></img>
                </div>
                <div  className="container2-slider">
                    <SliderCharacter />
                </div>


            </div>

        </div>
    )
}


export default Container2Scene