import React, {useEffect} from 'react'
import gsap from 'gsap'
import preloadFuncional from './preloadFuncional'
import "./preload.css"

const Preload = () => {

    useEffect(()=>{

        preloadFuncional()
        
        gsap.to(".tv",{
            delay:.5,
            duration:1,
            opacity:1,
            scaleX:"+= 100"
        })
       
        
        gsap.to(".tv",{
            delay:2,
            duration:2,
            scaleY:"+= 1500",
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