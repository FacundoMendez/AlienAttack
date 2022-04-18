import React,{useState, useEffect} from 'react'
import "./User.css"
import Cards from './Cards'
import NoCards from './NoCards'
import { Navigate} from 'react-router-dom'


const User = () => {
    let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")
    sessionStorage.removeItem("popupNavAlert")


    let login = sessionStorage.getItem("login")
    let idSession = sessionStorage.getItem("id")


    const[cards, setCards]= useState(false)

    const Signoff = () =>{
        sessionStorage.setItem("login", false)
        window.location.reload()
    }

    
    useEffect(()=>{
        let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")
        if(confirmacionVenta === "true"){
            setCards(true)
        }


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
                        }else{
                            setCards(false)
                        }
                    }} >
                        CHARACTERS
                    </li>

                    <li>TOKENS</li>
                    <li>EMAIL</li>
                    <li>PASSWORD</li>
                    <li>HISTORY</li>
                    <li onClick={()=> {
                        Signoff()

                        if (login === "false"){
                            <Navigate to= "/login" />
                        }else{
                            console.log("e")
                        }
                    
                    }}>Sign off</li>
                </ul>
            </div>
            <div className='containerView'>
                {cards ? <Cards/> : <NoCards /> } 
            </div>
        </div>
        : <Navigate to= "/login"/>
         }
    </>
  )
}

export default User