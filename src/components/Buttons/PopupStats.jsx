import React, {useContext}from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'
import TokenContext from '../context/TokenContext'
import noCash from './NoCash'
import "./buttonStats/stats.css"
import VidaStats from './buttonStats/VidaStats'


const PopupStats = (props) => {
  const contextToken = useContext(TokenContext)
  
  return (
    <div className="containerPopupStats">
        <div className='popupStats'>
          <div className="titlePopupStats">
              <h2>Do you want to increase your character's skill?</h2>
          </div>

          <VidaStats />
          

          <div className="buttonsCheckStats">
            
            <div className='no' onClick={() => {props.setPopupVenta(false)}}>
              <ButtonBuyDiseño 
                nameClass="configButtonStats" 
                text={"NO"} 
              />
            </div>
            <div className='yes' onClick={() => {

              const characterObj = props.characters.filter( e => e.id === props.id);
              
              if(contextToken.token - characterObj[0].precio >= 0){

                contextToken.setToken(contextToken.token - characterObj[0].precio)
                props.setPopupVenta(false)


              }else{
                noCash()
              }

              }}>
                
                <ButtonBuyDiseño  
                  nameClass="configButtonStats" 
                  text={"YES"} 
                />
            </div>

          </div>
        </div>
    </div>
  )
}

export default PopupStats