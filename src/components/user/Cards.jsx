import React from 'react'
import "./cards.css"

const Cards = (props) => {
  return (
    <div className="card">
        <div className="cardImg">
            <img src={props.img} alt="Character" />
        </div>
    </div>
  )
}

export default Cards