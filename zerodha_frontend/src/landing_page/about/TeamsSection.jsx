import React from 'react'

const TeamsSection = () => {
  return (
    <div className="container ">
        <div className="row p-5 mt-5 mb-5 border-top">
            <h1 className='text-center'>
                People
            </h1>
        </div>
        <div className="row mt-3 text-center" style={{lineHeight:"1.8",fontSize:"1.2rem"}}>
            <div className="col-6 p-5">
                <img src="media/nithinKamath.jpg" alt="" style={{borderRadius:"100%",width:"50%"}} />
                <h4 className='mt-5'>Nithin Kamath</h4>
                <h6>Founder, CEO</h6>
                
            </div>
            <div className="col-6 p-2 text-start">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                </p><br />
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p><br />
                <p>Playing basketball is his zen.</p><br />
                <p>Connect on <a href="/" style={{textDecoration:"none"}}>Homepage</a> / TradingQnA / Twitter </p>
            </div>
        </div>
    </div>
  )
}

export default TeamsSection