import React from 'react'

const Hero = () => {
  return (
    <div className="container">
        <div className="row text-center" style={{marginTop:"13rem"}}>
            <h1 className='fs-2'>Charges</h1>
            <p className='fs-4 mt-2 mb-5' style={{color:"#9B9B9B"}}>List of all charges and taxes</p>
        </div>

        <div className="row mt-5 text-center mb-5" style={{marginLeft:"52px",display:"flex",justifyContent:"center"}}>
            <div className="col-3">
                <img src="media/pricingEquity.svg" alt="" style={{width:"100%"}} />
                <h1 className='fs-2'>Free Equity delivery</h1>
                <p className='' style={{fontSize:"18px",color:"#9B9B9B"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            
            <div className="col-4 ms-5">
                <img src="media/intradayTrades.svg" alt="" style={{width:"80%"}} />
                <h1 className='fs-2'>Intraday and F&O trades</h1>
                <p className='' style={{fontSize:"18px",color:"#9B9B9B"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4">
                <img src="media/pricingEquity.svg" alt="" style={{width:"80%"}} />
                <h1 className='fs-2'>Free direct MF</h1>
                <p className='' style={{fontSize:"18px",color:"#9B9B9B"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero