import React from 'react'
import "./cards.css"

const Cards = () => {
  let img = sessionStorage.getItem("Imagen del producto")
  return (
    <div className="card">
        <div className="cardImg">
            <img src={img} alt="Character" />
        </div>
    </div>
  )
}

export default Cards