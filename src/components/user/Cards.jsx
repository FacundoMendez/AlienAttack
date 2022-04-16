import React from 'react'
import "./cards.css"

const Cards = () => {
  let img = sessionStorage.getItem("Imagen del producto")
  let classImg = sessionStorage.getItem("clase de imagen")
  return (
    <div className="card">
        <div className="cardImg ">
            <img className={classImg} src={img} alt="Character" />
        </div>
    </div>
  )
}

export default Cards