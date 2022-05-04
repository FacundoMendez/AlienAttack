import React, {useEffect} from 'react'
import "./letrasRandom.css"
import letrasRandomFunction from './letrasRandomFunction'

const LetrasRandom = () => {

    useEffect(()=>{
        letrasRandomFunction()

    },[])

  return (
    <div className='containerLetrasRandom'>
      <div className="blurLetrasRandom"></div>
      <canvas id="locoalien"></canvas>
    </div>
  )
}



export default LetrasRandom