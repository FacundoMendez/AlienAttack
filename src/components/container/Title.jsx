import React from 'react'
import ButtonLarge from '../Buttons/ButtonLarge'
import ButtonBuyDiseño from '../Buttons/buttonBuy/ButtonBuyDiseño'

export const Title = (props) => {
  return (
    <div className='titleButtons'>
        <div className='title'>
            <p>Alien Attack</p> 
        </div>
        <ButtonBuyDiseño 
          nameClass="buttonPlay"
          text={props.text}
        />
    </div>
  )
}
