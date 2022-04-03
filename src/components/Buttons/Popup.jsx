import React, {useState, useContext}from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'
import TokenContext from '../context/TokenContext'
import gsap from 'gsap'

const Popup = (props) => {

  const contextToken = useContext(TokenContext)

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
              const characterObj = props.characters.filter( e => e.id== props.id);
              if(contextToken.token - characterObj[0].precio >= 0){
                console.log(...characterObj);
                contextToken.setToken(contextToken.token - characterObj[0].precio)
                props.setPopupVenta(false)

       
              }else{
                const tokenNav = document.querySelector(".contadorCoin");

                gsap.to(tokenNav,{
                  color:"red",
                  y:2,
                  ease: "elastic.out(1, 0.3)",
                  duration:.9,
                })
               
                gsap.to(tokenNav,{
                  delay:1,
                  y:0,
                  color:"#bdffeefd",
                  duration:1,
                })
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