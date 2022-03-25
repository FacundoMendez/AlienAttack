import React from 'react'
import ButtonLarge from '../../Button.jsx/ButtonLarge'

export const Title = (props) => {
  return (
    <div className='titleButtons'>
        <div className='title'>
            <p>Alien Attack</p> 
        </div>
        <ButtonLarge text={props.text}/>
    </div>
  )
}