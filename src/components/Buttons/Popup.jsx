import React, {useState}from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'

const Popup = ({setPopupVenta}) => {

  return (
    <div className="containerPopup">
        <div className='popupBuy'>
          <div className="titlePopup">
              <h2>Are you sure you want to buy the character?</h2>
          </div>
          <div className="buttonsCheck">
            
            <div className='no' onClick={() => {setPopupVenta(false)}}>
              <ButtonBuyDiseño text={"NO"} />
            </div>
            <div className='yes' onClick={() => {setPopupVenta(false)}}>
                <ButtonBuyDiseño text={"YES"} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popup