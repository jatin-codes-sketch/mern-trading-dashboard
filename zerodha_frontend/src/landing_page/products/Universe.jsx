import React from 'react'

const Universe = () => {
  return (
    <div className="container">
        <div className="row mt-5 mb-5 text-center fs-4">
            <p>Want to know more about our technology stack? Check out the <a href="" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>
        </div>
        <div className="row text-center mb-5">
            <h1 className='fs-3 pb-3' style={{fontWeight:"500"}}>The Zerodha Universe</h1>
            <p className='fs-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="row m-5">

            <div className="col-4">
                <div className="row m-4">
                    <img src="media/zerodhafundhouse.png" alt="" className='ms-4'  style={{width:"85%"}} />
                    <p className='text-muted text-center mt-3' style={{fontSize:"13px"}}>Our asset management venture that is creating simple and transparent index funds to help you save to help you save for your goals.</p>
                </div>
                <div className="row m-4">
                    <img src="media/streak-logo.png" alt="" className='ms-4'  style={{width:"85%"}} />
                    <p className='text-muted text-center mt-3' style={{fontSize:"13px"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
            </div>

            <div className="col-4">
                <div className="row m-4">
                    <img src="media/sensibull-logo.svg" alt="" className='ms-4'  style={{width:"85%"}} />
                    <p className='text-muted text-center mt-3' style={{fontSize:"13px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="row m-4">
                    <img src="media/smallcase-logo.png" alt="" className='ms-4'  style={{width:"85%"}} />
                    <p className='text-muted text-center mt-3' style={{fontSize:"13px"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
            </div>

            <div className="col-4">
                <div className="row m-4">
                    <img src="media/tijori.svg" alt="" className='ms-4'  style={{width:"85%"}} />
                    <p className='text-muted text-center mt-3' style={{fontSize:"13px"}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <div className="row m-4">
                    <img src="media/dittoLogo.png" alt="" className='ms-4'  style={{width:"85%"}} />
                    <p className='text-muted text-center mt-3' style={{fontSize:"13px"}}>Personalized advice on life and health insurance. No spam and no mist-selling.</p>
                </div>
            </div>
        </div>
        
        <div className="row text-center" style={{display:'flex', justifyContent:"center"}}>
            <button className="btn btn-primary btn-lg mt-3 px-4 py-4 " style={{width:"300px",marginBottom:"6rem"}}>
        Sign up now
      </button>
        </div>
    </div>
  )
}

export default Universe