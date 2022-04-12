import React from 'react'
import "./login.css"
import LoginUser from './LoginUser';

const Login = () => {

  return (
    <div className="boxFormulario">
      <section className='formularioContacto'>
        <div className="form">
          <div className="input">
            <div className="inputBox">
              <label>Username</label>
              <input className='email' type="email" placeholder="Example@gmail.com" required />
            </div>
            <div className="inputBox">
              <label>Password</label>
              <input className='password' type="password" placeholder="........" required />
            </div>
            <div className="inputBox">
              <LoginUser />
            </div>
          </div>
          <p>Forget password? <a href="/">Click Here</a></p>
        </div>
      </section>
    </div>
  )
}

export default Login