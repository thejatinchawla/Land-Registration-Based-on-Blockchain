import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie'
// import LandContract from "../../artifacts/Land.json"
const Register =()=> {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [contact, setContact] = useState('')
const [address, setAddress] = useState('')
const [city, setCity] = useState('')
const [postalCode, setPostalCode] = useState('')  
  

const handleSubmit = async (e) => {
  e.preventDefault()
  let data = {name,email,contact,address,city,postalCode}
  try {
  const resp = await axios.post("http://localhost:5000/register",data)
  console.log(resp)
  Cookies.set('userInfo', JSON.stringify({name,email,contact,address,city,postalCode}));
  window.location='/login'
  alert("Profile Created Successfully")
  } catch (error) {
    console.log(error.response);
  }
}


  return(
  <div className='bgcolor'>
      <div className="register-content">
          <div className="land-logo">
              <img className="mb-2" src="https://github.com/thejatinchawla/Instagram-Clone/blob/master/src/land-registration-logo-removebg-preview%20(1).png?raw=true" alt="logo" />
          </div>
          <div className="details" style={{width:"30rem"}}>
                 <h1>REGISTRATION</h1>
                 <label htmlFor="name">Enter Name :</label>
                 <input required type="text" id='name' className='form-control mb-2' name='name' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='fullname' />

                 <label htmlFor="email">Enter Email Address :</label>
                 <input required type="email" id='email' className='form-control mb-2' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='abc123@gmail.com' />

                 <label htmlFor="address">Contract Address :</label>
                 <input required type="text" id='age' className='form-control mb-2' name='address' value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='0x728.........D30f8' />

                 <label htmlFor="postalcode">Enter Postal Code :</label>
                 <input required type="text" id='postalcode' className='form-control mb-2' name='postalcode' value={postalCode} onChange={(e)=>{setPostalCode(e.target.value)}} placeholder='401504'/>

                 <label htmlFor="city">Enter City :</label>
                 <input required type="text" id='city' className='form-control mb-2' name='city' value={city} onChange={(e)=>{setCity(e.target.value)}}placeholder='boisar'/>
                 
                 <label htmlFor="contact">Enter Contact No. :</label>
                 <input required type="text" id='contact' className='form-control mb-2' name='contact' value={contact} onChange={(e)=>{setContact(e.target.value)}} placeholder='996247..75'/>

                 <button onClick={handleSubmit} className="btn btn-primary form-control">Register as Buyer</button>
                 <p className='mt-1'>Already have an account? <Link style={{textDecoration:"none"}} to="/login">Login</Link></p>
          </div>
          
      </div>
  </div>
  )
}


export default Register