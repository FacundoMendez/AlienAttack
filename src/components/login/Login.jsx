import React,{ useState } from 'react'
import "./login.css"
import { db } from '../firebase/config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { Navigate} from 'react-router-dom'

const Login = () => {

const [active, setActive] = useState(false)
const login =  sessionStorage.getItem("id")



  const [values, setValues] = useState({
    email:" ",
    password:" ",
    fyh: Timestamp.fromDate(new Date()),
  })


  const submit = (e) =>{
    e.preventDefault()

    const user = {
      usuarioRegistrado:{...values}
    }

    const usersRegister = collection(db,"Users")

    addDoc(usersRegister, user )
      .then((doc) => {
        sessionStorage.setItem("id", doc.id)
      })

      setActive(true)
    }

  const handleInputs = (e) =>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }


  const SignIn = () =>{
    return <Navigate to= "/user"/>
}

  if (active){
    sessionStorage.setItem("email", values.email)
    sessionStorage.setItem("password", values.password)
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
                    onChange={handleInputs} 
                    required 
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