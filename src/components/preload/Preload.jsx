import React, {useEffect} from 'react'
import gsap from 'gsap'
import EffectMovie from '../container/EffectMovie'
const Preload = () => {

    useEffect(()=>{

        let preload = document.querySelector(".preload");  
        setTimeout(function(){
            preload.classList.add("cerrar");
            preload.style.zIndex=0;
        },3000)
        
        gsap.to(".tv",{
            delay:.5,
            duration:1,
            opacity:"+=1",
            scaleX:"+= 100"
        })
       
        
        gsap.to(".tv",{
            delay:2,
            duration:2,
            scaleY:"+= 2000",
            opacity:.2
        })

    },[])
  
  return (
    <div className="preload">
        <div className="tv"></div>
    </div>
  )
}

export default Preload