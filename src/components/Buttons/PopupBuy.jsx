import React, {useContext }from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'
import TokenContext from '../context/TokenContext'
import noCall from './NoCall'


const Popup = (props) => {
  const contextToken = useContext(TokenContext)

  return (
    <div className="containerPopup">
        <div className='popupBuy'>
          <div className="titlePopupStats">
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

              const characterObj = props.characters.filter( e => e.id === props.id);
              
              if(contextToken.token - characterObj[0].precio >= 0){

                contextToken.setToken(contextToken.token - characterObj[0].precio)
                props.setPopupVenta(false)

                sessionStorage.setItem("Imagen del producto", props.img)
                sessionStorage.setItem("confirmacion de venta",true)
                sessionStorage.setItem("popupNavAlert", true)

              }else{
                noCall()
              }

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