import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

const presentGameEffects = () => {
    
    gsap.registerPlugin(ScrollTrigger); 


    gsap.from(".middle",{
        opacity:-2,
        scale:2.5,
        duration:2.5,
        delay:.5,
        scrollTrigger:{
            trigger: ".container1",
            scrub: 2,
        }
    })


    gsap.from(".textPresent",{
        opacity:-2,
        scale:2.5,
        duration:2.5,
        delay:1,
        scrollTrigger:{
            trigger: ".container1",
            scrub: 2,
        }
    })

}

export default presentGameEffects;