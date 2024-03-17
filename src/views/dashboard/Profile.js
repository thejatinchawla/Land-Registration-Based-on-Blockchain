import { useEffect, useState } from "react";
import Cookies from 'js-cookie'

const Profile = ()=> {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [postalCode, setPostalCode] = useState('')  
  useEffect(() => {
  const userInfoFromCookie = Cookies.get('userInfo')
  if (userInfoFromCookie) {
    const { name,email,contact,address,city,postalCode } = JSON.parse(userInfoFromCookie);
    setName(name);
    setEmail(email);
    setContact(contact);
    setAddress(address);
    setCity(city);
    setPostalCode(postalCode);
  }
}, []);
 
  return (
    <div className='Bprofile'>
      <div className="buyer-form border border-1 mt-5" style={{width:"40rem"}}>
        <form className='form p-4'>
          <h1>Edit Profile</h1>
          <div className="form-content">
          <label htmlFor="walletAddress" className="mt-3">Your Wallet address :</label>
            <input disabled type="text" id='walletAddress' className='form-control' value={address} onChange={(e)=>{setAddress(e.target.value)}} placeholder='Wallet address'/>

          <label htmlFor="fullName" className=" mt-3">Name :</label>
            <input type="text" id='fullName' value={name} onChange={(e)=>{setName(e.target.value)}}className='form-control' placeholder='Full Name' />
            
          <label htmlFor="emailAddress" className=" mt-3">Email address :</label>
            <input type="text" id='emailAddress' value={email} onChange={(e)=>{setEmail(e.target.value)}} className='form-control' placeholder='Email address' />

          <label htmlFor="city" className=" mt-3">City :</label>
            <input type="text" id='city' value={city} onChange={(e)=>{setCity(e.target.value)}} className='form-control' placeholder='City' />
            
          <label htmlFor="PostalCode" className=" mt-3">Postal Code :</label>
            <input type="text" id='PostalCode' value={postalCode} onChange={(e)=>{setPostalCode(e.target.value)}} className='form-control' placeholder='Postal Code' />

          <label htmlFor="ContactNumber" className=" mt-3">Contact Number :</label>
            <input type="text" id='ContactNumber' value={contact} onChange={(e)=>{setContact(e.target.value)}} className='form-control' placeholder='Contact Number' />
            

          </div>
          <button type="button" className="btn btn-primary mt-3">Save </button>
        </form>
      </div>
    </div>
  )
}


export default Profile