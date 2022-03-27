import React, {useEffect} from 'react'
import gsap from 'gsap'
import backgroundPasillo from  "../../img/backgroundPasillo.jpg"
import backgroundCharacter from "../../img/backgroundCharacter2.jpg"
import ScrollTrigger from 'gsap/ScrollTrigger'




const Container2Scene = () => {

    useEffect(() =>{
        gsap.registerPlugin(ScrollTrigger); 
        
        const container2 = document.querySelector(".container2")
        const container2Pasillo = document.querySelector(".container2-pasillo")
        const container2Character = document.querySelector(".container2-character")
    
        gsap.timeline({
            scrollTrigger:{
                trigger: container2,
                pin: container2,
                scrub:2,
                end:"+370%"
            }
        })
    
        .to(container2Pasillo,{
            duration:18,
            scale:"-=1.9",
            yPercent:"-=1"
        })
    
    
        .to(container2Pasillo,{
            webkitFilter:"blur(5px)"
        })
    
        .to(container2Character,{
            duration:18,
            delay:1,
            scale:1,
            opacity: 1
        })
    
    
   /*      .to(container2,{
            opacity:0,
            duration:10,
        }) */


    },[])


    return (
        <div className='container2'>
            <div className='container2-pasillo'>
                <img src={backgroundPasillo} alt="Pasillo" ></img>
            </div>

            <div className='container2-character'>
                <img src={backgroundCharacter} alt="scene characters" ></img>
            </div>

        </div>
    )
}


export default Container2Scene