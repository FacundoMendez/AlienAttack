import React, {useContext, useState }from 'react'
import ButtonBuyDiseño from './buttonBuy/ButtonBuyDiseño'
import TokenContext from '../context/TokenContext'
import noCash from './NoCash'
import { Navigate} from 'react-router-dom'

const Popup = (props) => {
  const contextToken = useContext(TokenContext)

  let login = sessionStorage.getItem("login")

  const [activeLogin, setActiveLogin] = useState(false)

  const [buyId , setBuyId] = useState(false)


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
                if (login === null){
                  setActiveLogin(true)
                }else{ 
                  if(contextToken.token - characterObj[0].precio >= 0){
                    
                    setBuyId(true)

                    contextToken.setToken(contextToken.token - characterObj[0].precio)
                    props.setPopupVenta(false)

                    contextToken.setIdUser(props.id)
                    localStorage.setItem("idProd", props.id)
                    localStorage.setItem("Imagen del producto", props.img)
                    localStorage.setItem("clase de imagen", props.class)
                    localStorage.setItem("confirmacion de venta",true)
                    sessionStorage.setItem("popupNavAlert", true)
                    
                  }else{
                    noCash()
                  }
                }
              }}>

                {activeLogin ? <Navigate to= "/user"/> : null}
                
                <ButtonBuyDiseño  
                  nameClass="configButton" 
                  buyId={buyId} /* --- */
                  text={"YES"} 
                />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Popup