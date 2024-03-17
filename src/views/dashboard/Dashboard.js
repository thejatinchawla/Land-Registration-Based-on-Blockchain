import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
   return (
    <>
      <div className="Bdashboard mt-5">
          <div className="row cards">

            <div className="col-md-4">
            <div className="card  mb-3" style={{maxWidth:"25rem"}}>
              <div className="card-header text-center"><h3>TOTAL SELLERS</h3></div>
              <div className="card-header text-center"><h4> 3</h4></div>             
            </div>
            <div className="card mt-5" style={{maxWidth:"25rem"}}>
              <div className="card-header"><h4>Profile</h4></div>
              <div className="card-body">
              <Link to='/user/profile' > <button type="button" className="btn btn-primary">View Profile</button> </Link> 
              </div>
            </div>
            </div>
           <div className="col-md-4">
            <div className="card mb-3" style={{maxWidth:"25rem"}}>
              <div className="card-header text-center"><h4>REGISTERED LANDS COUNT</h4></div>
              <div className="card-header text-center"><h4> 3</h4></div>            
            </div>
            <div className="card mt-5" style={{maxWidth:"25rem"}}>
              <div className="card-header"><h4>Owned Lands</h4></div>
              <div className="card-body">
              <Link to='/user/gallery'>
              <button type="button" className="btn btn-primary">View Your Lands</button>
              </Link>
              </div>
            </div>
            </div>

            <div className="col-md-4">
            <div className="card mb-3" style={{maxWidth:"25rem"}}>
              <div className="card-header text-center"><h3>TOTAL REQUESTS</h3></div>
              <div className="card-header text-center"><h4> 1</h4></div>              
            </div>
            <div className="card mt-5" style={{maxWidth:"25rem"}}>
              <div className="card-header text-center"><h5>Make Payment for Approved Land Requests</h5></div>
              <div className="card-body">
              <Link to='/user/gallery' >
              <button type="button" className="btn btn-primary">Make Payment</button>
              </Link>
              </div>
            </div>
            </div>

            <div className="row card mt-5 pb-5">
            <table class="table  mt-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Land name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Price</th>
                    <th scope="col">Landmark</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Sq. ft</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Sahyadri Land Uran</td>
                    <td>B-23 Agarwal Trade centre, Sec-11 Belapur Navi Mum Navi Mumbai</td>
                    <td>10 Eth</td>
                    <td>Indra Gandhi Hospital</td>
                    <td>3.8 ★</td>
                    <td>1100</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Greenscape Land Uran</td>
                    <td>406 Ideal Trade Center Navi Mumbai</td>
                    <td>5 Eth</td>
                    <td>Dr. Babres Hospital</td>
                    <td>4 ★</td>
                    <td>1089</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Prime Aamhi Urankar</td>
                    <td>D10 Ambewadi Jss Road Shankar Seth Marg Girgaon, Mumbai,Mumbai,400004,India</td>
                    <td>5 Eth</td>
                    <td>Gade Hospital</td>
                    <td>3.5 ★</td>
                    <td>1100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    </div>
    </>
  )
}

export default Dashboard
