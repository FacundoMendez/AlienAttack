import React,{useState} from 'react'
import PopupHp from '../PopupStatsHp'
import PopupVelocidad from '../PopupStatsVelocidad'
import PopupFuerza from '../PopupStatsFuerza'


const Stats = (props) => {

    const [active, setActive ] = useState(false)

    return (
        <div className='charactersStats'>
            <div className="precio">
                 <p className="valorPrecio">{props.precio} Atck</p>
             </div>
            <div className="stats">

                <div className="ss hp" onClick={() => {
                    setActive(true)
                    }}>
                    <p className="valor">{props.valorHp}%</p>
                    <div className="statsHP">
                        <h4>{props.titleHp}</h4>
                        <p>{props.textHp}</p>
                    </div>
                </div>
                {active ? <PopupHp 
                    setActive={setActive} 
                    id={props.id}
                    characters={props.characters}
                    valorHp = {props.valorHp}
                    setStatHp={props.setStatHp}
                /> : null}

                <div className="ss velocidad" onClick={() => {
                    setActive(true)
                    }}>  
                    <p className="valor">{props.valorVelocidad}%</p>
                    <div className="statsVelocidad">
                        <h4>{props.titleVelocidad}</h4>
                        <p>{props.textVelociad}</p>
                    </div>
                </div>

                {active ? <PopupVelocidad 
                    setActive={setActive} 
                    id={props.id}
                    characters={props.characters}
                    valorVelocidad = {props.valorVelocidad}
                    setStatVelocidad={props.setStatVelocidad}
                /> : null}


                <div className="ss fuerza" onClick={() => {
                    setActive(true)
                    }}>
                    <p className="valor">{props.valorFuerza}%</p>
                    <div className="statsFuerza">
                        <h4>{props.titleFuerza}</h4>
                        <p>{props.textFuerza}</p>
                    </div>
                </div>

                {active ? <PopupFuerza 
                    setActive={setActive} 
                    id={props.id}
                    characters={props.characters}
                    valorFuerza = {props.valorFuerza}
                    setStatFuerza={props.setStatFuerza}
                /> : null}


            </div>
  
        </div>
    )
}

export default Stats