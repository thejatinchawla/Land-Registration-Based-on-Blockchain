import React,{ useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import Profile from '.././dashboard/Profile'
const Login =  ()=>  {
const [address, setaddress] = useState("")
const [user, setUser] = useState(null);
const [redirectToDashboard, setRedirectToDashboard] = useState(false);    
const Login = async (e) => {
  e.preventDefault()
  try {
    let data = {
      address 
    }
  const resp = await axios.post("http://localhost:5000/login",data)
  console.log(resp.data)
  setUser(resp.data)
  setRedirectToDashboard(true);
  window.localStorage.setItem('authenticated',true)
  alert("Login Successful!")
  window.location='/user/dashboard'
} catch (error) {
    alert("Login Failed")
    console.log(error);
  }
}

if (redirectToDashboard && user) {
  return <Navigate to={{ pathname: '/user/payment', state: { user } }} />;
}
  return (
    <div className='bgcolor'>
        <div className="login-content">
            <div className="land-logo">
                <img className="mb-4" src="https://github.com/thejatinchawla/Instagram-Clone/blob/master/src/land-registration-logo-removebg-preview%20(1).png?raw=true" alt="logo" />
            </div>
            <div className="details" style={{width:"25rem"}}>
                   <h1 className='text-center'>LOGIN</h1>
                   <p className='mb-4 text-center'>to access web3 Application</p>
  
                   <label htmlFor="address">Enter Contract Address :</label>
                   <input type="text" id='address' className='form-control mb-4' value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder='Enter your registered Contract Address' />
                   
                   <button onClick={Login} className="btn btn-primary form-control mb-3">Login</button>
                   <p>Don&apos;t have an account? <Link style={{textDecoration:"none"}} to="/register">Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login

