import React,{useState, useEffect} from 'react'
import "./User.css"
import Cards from './Cards'
import NoCards from './NoCards'
import { Navigate} from 'react-router-dom'
import { db } from '../firebase/config'
import { collection, getDocs} from 'firebase/firestore'
import EmailUser from './Email'



const User = () => {
    sessionStorage.removeItem("popupNavAlert")
    let confirmacionVenta = sessionStorage.getItem("confirmacion de venta")


    let login = sessionStorage.getItem("login")


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
        let idSession = sessionStorage.getItem("id")

        if(confirmacionVenta === "true"){
            setCards(true)
        }

    
        const usersRef = collection(db, "Users");

        /* llamar (async) esa referencia */

    
        getDocs(usersRef)
          .then(resp => {
            const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
            let userId = items.filter(u => u.id === idSession )
            setId(userId)
            setPassword(userId[0].usuarioRegistrado.password)
            setEmail(userId[0].usuarioRegistrado.email)
          }).catch(()=>{console.log("Login")})


          return () => {
            setCards({});
 /*            sessionStorage.clear() */
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
                            setActiveEmail(false)
                        }

                    }} >
                        CHARACTERS
                    </li>

                    <li onClick={() => {
                        setActiveEmail(true)
                        setCards(false)

                        }}>EMAIL</li>

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
                {cards ? <Cards/> : <NoCards/> } 
                
              {/*   {activeEmail ? <EmailUser email={email}/>: null }  */}
            </div>
        </div>
        : <Navigate to= "/login"/>
         }
    </>
  )
}

export default User