import React from 'react'

const Pricing = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4">
          <h1>Unbeatable Pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right"></i> </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 mb-5">
          <div className="row text-center">
            <div className="col p-4 border">
              <h1 className='mb-3'>&#8377;0</h1>
              <p>Free equity delivery and direct mutal funds</p>
            </div>
            <div className="col p-4 border">
              <h1 className='mb-3'>&#8377;20</h1>
              <p>Intraday and F&0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing