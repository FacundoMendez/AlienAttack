import React from 'react'
import loader from "./loader.gif"
import "./loader.css"

const Loader = () => {
  return (
    <div className='loader'>
        <img className='loaderImg' src={loader} alt="loader" />
    </div>
  )
}

export default Loader