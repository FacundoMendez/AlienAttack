import React, {useEffect, useState} from 'react'
import Popup from '../../Buttons/Popup'

const Stats = (props) => {

  return (
      <div className='charactersStats'>
        <div className="stats">
                <div className="ss hp">
                    <p className="valor">{props.valorHp}</p>
                    <div className="statsHP">
                        <h4>{props.titleHp}</h4>
                        <p>{props.textHp}</p>
                    </div>
                </div>

                <div className="ss velocidad">  
                    <p className="valor">{props.valorVelocidad}</p>
                    <div className="statsVelocidad">
                        <h4>{props.titleVelocidad}</h4>
                        <p>{props.textVelociad}</p>
                    </div>
                </div>

                <div className="ss fuerza">
                    <p className="valor">{props.valorFuerza}</p>
                    <div className="statsFuerza">
                        <h4>{props.titleFuerza}</h4>
                        <p>{props.textFuerza}</p>
                    </div>
                </div>
            </div>

            
            <div id={props.id} className="buy" onClick={()=> {
                    const characterObj = props.characters.filter( e => e.id== props.id)
                    console.log(...characterObj)
                }} >

                <p className="buttonBuy">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                        BUY
                </p>

            </div>

             
      </div>
  )
}

export default Stats