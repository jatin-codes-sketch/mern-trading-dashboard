import React from 'react'
import "./style/style.css"
const Education = () => {
  return (
    <div className="container free-section mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" alt="" style={{width:"80%"}} />
        </div>
        
        <div className=" col-6 mb-5">
          <h1 className='mb-3 fs-2'>Free and open market education</h1>
          <p>Varsity, the largest online stock market education book in the world covering evrything from the basicis to advanced trading.</p>
          <a href="" style={{textDecoration:"none"}}>Versity<i class="fa fa-long-arrow-right"></i> </a>

          <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-long-arrow-right"></i> </a>
        </div>
        
      </div>
    </div>
  )
}

export default Education