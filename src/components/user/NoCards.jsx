import React,{useEffect,useState} from 'react'
import Loader from '../loader/Loader'

const NoCards = () => {

  const [active, setActive] = useState(false)
  

  return (
    <>

      <div className='noCharacters'>
        <h1>does not have characters...</h1>
      </div>
    </>
  )
}

export default NoCards