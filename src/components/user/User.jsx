import React,{useState, useEffect} from 'react'
import "./User.css"
import Cards from './Cards'
import NoCards from './NoCards'
import { Navigate} from 'react-router-dom'
import { db } from '../firebase/config'
import { collection, getDocs} from 'firebase/firestore'


const User = () => {
    let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")
    sessionStorage.removeItem("popupNavAlert")


    let login = sessionStorage.getItem("login")
    let idSession = sessionStorage.getItem("id")


    const[cards, setCards]= useState(false)
    const[email, setEmail]= useState(" ")
    const[password, setPassword]= useState(" ")
    const[id, setId]= useState(" ")


    const[activePassword, setActivePassword]= useState(false)
    const[activeEmail, setActiveEmail]= useState(false)
    const[activeHistory, setActiveHistory]= useState(false)

    const Signoff = () =>{
        sessionStorage.setItem("login", false)
        window.location.reload()
    }

    
    useEffect(()=>{
        let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")
        if(confirmacionVenta === "true"){
            setCards(true)
        }
    
        const usersRef = collection(db, "Users");

        /* llamar (async) esa referencia */

    
        getDocs(usersRef)
          .then(resp => {
            const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            let userId = items.filter(u => u.id == idSession )
            setId(userId)
            setPassword(userId[0].usuarioRegistrado.password)
            setEmail(userId[0].usuarioRegistrado.email)
          })





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

                    <li onClick={() => setActiveEmail(true)}>EMAIL</li>

                    <li onClick={() => setActivePassword(true)}>PASSWORD</li>

                    <li onClick={() => setActiveHistory(true)}>HISTORY</li>

                    <li onClick={()=> {
                        Signoff()
                        if (login === "false"){
                            <Navigate to= "/login" />
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