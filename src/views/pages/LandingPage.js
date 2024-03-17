const LandingPage = () => {

  return (
    <div className='bgcolor'>
        <div className="landingpage-content">
            <div className="land-logo">
                <img className="mb-5" src="https://github.com/thejatinchawla/Instagram-Clone/blob/master/src/land-registration-logo-removebg-preview%20(1).png?raw=true" alt="logo" />
            </div>
            <div className="landingpage-role">
                <h1>Welcome!</h1>
                <h4 className="mb-5">Making the most of Digital Era!</h4>
                <input type="button" onClick={window.location='/register'} className="btn btn-success form-control mb-4" style={{height:"4rem"}} value="Get Started" />
            </div>
        </div>
    </div>
  )
}


export default LandingPage