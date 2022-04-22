import React,{useContext, useState, useEffect } from 'react'
import "./login.css"
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Navigate} from 'react-router-dom'
import TokenContext from '../context/TokenContext'

const Login = () => {


const [active, setActive] = useState(false)


  const [values, setValues] = useState({
    email:" ",
    password:" ",
    fyh: Timestamp.fromDate(new Date()),
  })

  const contextToken = useContext(TokenContext)


  useEffect(()=>{
    contextToken.setEmailx(values.email)
    contextToken.setPasswordx(values.password)
    contextToken.setFyh(values.fyh.toDate().toString())

    sessionStorage.setItem("emailUser",contextToken.emailx)
    sessionStorage.setItem("passUser",contextToken.passwordx)
    localStorage.setItem("fyhUser",contextToken.fyh)
  })


  const submit = (e) =>{
    e.preventDefault()

    const user = {
      usuarioRegistrado:{...values}
    }

    const usersRegister = collection(db,"Users")
      addDoc(usersRegister, user )
      setActive(true)
  }

  
  const handleInputs = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const SignIn = () =>{
    localStorage.setItem("fyhUser",contextToken.fyh)

    return <Navigate to= "/user" />
  }



  if (active){
    sessionStorage.setItem("login", true)
    return SignIn()
  }



  
  return (
      <div className="boxFormulario">
        <form onSubmit={submit}>
          <section className='formularioContacto'>
            <div className="form">
              <div className="input">

                <div className="inputBox">
                  <label>Username</label>
                  <input 
                    className='email' 
                    type="email" 
                    placeholder="Example@gmail.com" 
                    value={values.email} 
                    name="email"
                    onChange={handleInputs} 
                    required 
                  />
                  
                </div>

                <div className="inputBox">
                  <label>Password</label>
                  <input 
                    className='password' 
                    type="password" 
                    placeholder="* * * * * " 
                    value={values.password} 
                    name="password"
                    required 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Password must be 8 characters including 1 uppercase letter, 1 lowercase letter and numeric characters"
                    onChange={handleInputs} 
                  />
                </div>

                <div className="inputBox">
                  {/* <LoginUser /> */}
                  <button 
                    className='singIn' 
                    type="submit"
                    name= "id"
                     > Sing In </button>
                </div>

              </div>
              <p>Forget password? <a href="/">Click Here</a></p>
            </div>
          </section>
        </form>

      </div>
  )
}

export default Login