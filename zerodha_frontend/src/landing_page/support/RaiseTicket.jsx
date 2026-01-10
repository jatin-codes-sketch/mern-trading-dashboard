import React from 'react'

const RaiseTicket = () => {
  return (
    <div className="container">
        <div className="row" >
            <h1 className='mt-5' style={{fontSize:"25px"}}>To create a ticket, select a relevant topic</h1>
        </div>
        <div className="row">
            <div className="col-4 mb-5">
                <h3 className='fs-5 my-5'><i class="fa-solid fa-circle-plus"></i>Your Account</h3>
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Online Account Opening</a><br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Offline Account Opening</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Company, Partnership and HUF Account</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>NRI Account Opening</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Charges at Zerodha</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Getting Started</a> <br />

            </div>
            <div className="col-4">
                <h3 className='fs-5 my-5'><i class="fa-etch fa-solid fa-user"></i> Your Zerodha Account</h3>
                    <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Login Credentials</a><br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Account Modification and Segment Addition</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>DP ID and bank details</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Your Profile</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Transfer and conversion of shares</a> <br />
            </div>
            <div className="col-4 mb-5">
                <h3 className='fs-5 my-5'><i class="fa-solid fa-chart-area"></i>Your Zerodha Account</h3>
                    <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Margin/leverage, Product and Order types</a><br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Kite Web and Mobile</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Trading FAQs</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Corporate Actions</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Sentinel</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Kite API</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Pi and other platform</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>Stockreports+</a> <br />
                <a href="" style={{textDecoration:"none",lineHeight:"2.4"}}>GTT</a> <br />
            </div>
        </div>
    </div>
  )
}

export default RaiseTicket