import React from 'react'
import "../home/style/style.css"
const Hero = () => {
  return (
    <section className='container-fluid' id='supportHero'>
        <div className="p-5" id='supportWrapper'>
            <h4>Support Portal</h4>
            <a href="" style={{paddingRight:"20rem"}}>Track Tickets</a>
        </div>
        <div className="row p-3 m-5" id='supportWrapper'>
            <div className="col-6 p-3" style={{lineHeight:"2"}} >
                <h1 className='fs-3 pb-3'>Search for an answer or browse help topics to create a ticket</h1>
                <input type="text" placeholder='Eg, how do I activate F&O' className='mb-3' /> <br />
                <a href=''>Track account opening</a> <br />
                <a href=''>Track segment activation </a> <br />
                <a href=''>Intraday margins </a> <br />
                <a href=''>Kite user manual</a>
            </div>
            <div className="col-5 ms-5" >
                <h1 className='fs-3'>Featured</h1>
                <ol style={{lineHeight:"2.5"}}>
                    <li><a href=''>Current Takeovers and Delisting  </a> <br /></li>
                    <li><a href=''>Latest Intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
            
        </div>
    </section>

  )
}

export default Hero