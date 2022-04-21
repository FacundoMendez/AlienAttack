import React,{useState, useEffect} from 'react'
import "./cards.css"
import Loader from '../../loader/Loader'


const EmailUser = ({email, password}) => {

  const [active, setActive] = useState(false)

  useEffect(()=>{
      setTimeout(() => {
        setActive(true)
    }, 3000);
  },[])


  return (
    <>
    {active ?
    <div className="bill">
      <div className="emailUser">
          <p> <span>Email:</span>  {email}</p>
      </div>
      <div className="passwordUser">
          <p><span> Password: </span> {password}</p>
      </div>
    </div>

    : <Loader />}

    </>
  )
}

export default EmailUser