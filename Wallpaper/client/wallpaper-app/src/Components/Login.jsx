import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

export default function Login() {
  const {login} = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = (event)=>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    login(email, password).then((userCredential)=>{
      navigate('/', {replace: true})
    })
    .catch((error)=>{
      console.log(error.message);
    });
  };
  return (
   <>
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 shadow p-3 mt-5 mx-auto">
          <h1 className='mb-4'>
            Login
          </h1>
          <form onSubmit={handleLogin}>
          <div>
            <label className='form-label'>Email</label>
            <input name="email" type="email" className='form-control mb-4' required placeholder='Enter your email'/>
          </div>
          <div>
            <label className='form-label'>Password</label>
            <input name="password" type="password" className='form-control mb-4' required placeholder='Enter your password'/>
          </div>
          <div>
           <button type="submit" className="btn btn-danger">Login</button>
            Don't have an account? <Link to="/register">Register</Link>
          </div>
          </form>
          
        </div>
      </div>
    </div>
   </>
  )
}
