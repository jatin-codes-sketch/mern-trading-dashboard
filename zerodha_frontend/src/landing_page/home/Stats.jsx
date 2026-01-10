import React from 'react'

const Stats = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <h1 className='fs-2 mb-5'>Trust with confidence</h1>
          <h2 className='fs-4'>Customer-first always</h2>
          <p className='text-muted fs-5'>that's why 1.3+ crore customers trust Zerodha with U+20B9 2.5+ lakh crores worth of equity investments. </p><br />

          <h2 className='fs-3'>No spam or gimmicks</h2>
          <p className='text-muted fs-5'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p><br />

          <h2 className='fs-3'>The Zerodha universe</h2>
          <p className='text-muted fs-5'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p><br />

          <h2 className='fs-3'>Do better with money</h2>
          <p className='text-muted fs-5'>With initiatives like Nudge and Kill Switch, we don't just faciliate transactions, but actively help you do better with your money.</p>

        </div>
        <div className="col-6">
          <img src="media/ecosystem.png" alt="" className='mt-3' style={{width:"100%"}}/>
          <div className="text-center">
            <a href="" className='mx-4' style={{textDecoration:"none"}}>Explore our Products <i class="fa fa-long-arrow-right"></i> </a>
            <a href="" style={{textDecoration:"none"}}>Try Kite demo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats