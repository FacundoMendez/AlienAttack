import React, {useEffect, useState} from 'react'
import ButtonBuy from '../../Buttons/buttonBuy/ButtonBuy'
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
            <ButtonBuy 
                id={props.characterId} 
                characters={props.characters} 
                setPopupVenta={props.setPopupVenta}
            />
        </div>
    )
}

export default Stats