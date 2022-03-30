import React, {useState}from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'

const Popup = (props) => {

  return (
    <div className="containerPopup">
        <div className='popupBuy'>
          <div className="titlePopup">
              <h2>Are you sure you want to buy the character?</h2>
          </div>
          <div className="buttonsCheck">
            
            <div className='no' onClick={() => {props.setPopupVenta(false)}}>
              <ButtonBuyDiseño 
                nameClass="configButton" 
                text={"NO"} 
              />
            </div>
            <div className='yes' onClick={() => {
              props.setPopupVenta(false)
              const characterObj = props.characters.filter( e => e.id== props.id);
              console.log(...characterObj);
              }}>
                
                <ButtonBuyDiseño  
                  nameClass="configButton" 
                  text={"YES"} 
                />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popup