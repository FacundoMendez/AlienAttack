import React,{useState, useEffect} from 'react'
import "./User.css"
import Cards from './Cards'
import NoCards from './NoCards'
import { Navigate} from 'react-router-dom'
import EmailUser from './Bill'
import History from './History'


const User = () => {


    let login = sessionStorage.getItem("login")

    const[cards, setCards]= useState(false)


    const[activeEmail, setActiveEmail]= useState(false)
    const[activeHistory, setActiveHistory]= useState(false)



    const Signoff = () =>{
        sessionStorage.setItem("login", false)
        sessionStorage.clear()
        window.location.reload()
    }

    sessionStorage.removeItem("popupNavAlert")
    let emailUser =sessionStorage.getItem("emailUser")
    let idUser =localStorage.getItem("idProd")
    let passUser =sessionStorage.getItem("passUser")
    let fyhUser = localStorage.getItem("fyhUser")
    let confirmacionVenta = localStorage.getItem("confirmacion de venta")

    useEffect(()=>{


        let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")

        if(confirmacionVenta === "true"){
            setCards(true)
        }
    
        return () => {
          setCards({});
        };


    },[])

  return (
      <>
      {login === "true"?
        <div className='tableUser'>
            <div className='containerList'>
                <ul className='listUser'>
                    <li className='characters' onClick={() => {

                        if(confirmacionVenta === "true"){
                            setCards(true)
                            setActiveHistory(false)
                            setActiveEmail(false)
                        }

                    }} >
                        CHARACTERS
                    </li>

                    <li onClick={() => {
                        setActiveEmail(true)
                        setCards(false)
                        setActiveHistory(false)
                        }}>Bill
                    </li>

                    <li onClick={() => {
                        setActiveHistory(true)
                        setCards(false)
                        setActiveEmail(false)
                        }}>HISTORY
                    </li>

                </ul>

                <div className="singOff" onClick={() => {
                    Signoff()
                    if (login === "false"){
                        <Navigate to= "/login" />
                    }
                }}> <p>Sign off</p> </div>

            </div>
            <div className='containerView'>
                {cards ? <Cards/> : null /* <NoCards/> */  } 
                {activeEmail ? <EmailUser email={emailUser} password={passUser}/>: null }  
                {activeHistory ? <History history={idUser} fyh={fyhUser}/> :null}  
            </div>
        </div>
        : <Navigate to= "/login"/>
         }
    </>
  )
}

export default User