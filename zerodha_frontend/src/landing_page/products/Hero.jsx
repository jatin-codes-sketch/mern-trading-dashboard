import React from 'react'
import "../home/style/style.css"

const Hero = () => {
  return (
    <div className="container border-bottom">
        <div className="product-upper text-center mt-5">
        <h1 className='fs-1'>Zerodha Products</h1>
        <h3 className='text-muted mt-3 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='mt-3 fs-5'>Check out our  <a href="" style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
        </div>
    </div>
  )
}

export default Hero