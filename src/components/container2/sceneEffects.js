import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const sceneEffects = () =>{
    gsap.registerPlugin(ScrollTrigger); 
        
    const container2 = document.querySelector(".container2")
    const container2Pasillo = document.querySelector(".container2-pasillo")
    const container2Character = document.querySelector(".container2-character")
    const sliderCharacter = document.querySelector(".container2-slider")
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
        scale:"-=1.99",
        yPercent:"-=.5"
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

    .to(sliderCharacter,{
        opacity: 1
    })

/*      .to(container2,{
        opacity:0,
        duration:10,
    }) */

}


export default sceneEffects;