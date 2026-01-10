import React from 'react'

const LeftSection = ({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore,}) => {
  return (
    <div className="container ">
        <div className="row">
            <div className="col-7 pt-5">
                <img src={imageUrl} style={{width:"600px"}}/>
            </div>


            <div className="col-5 pt-5 ps-5" style={{margin:"103px 0"}} >
                <h1 className='fs-3'>{productName}</h1>
                <p className='fs-5 text-muted' style={{lineHeight:"45px"}}>{productDescription}</p>
                <div className='fs-5'>
                    <a href={tryDemo}  style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
                <div className='mt-4'>
                    <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="" style={{width:"200px",marginRight:"20px"}}/></a>
                    <a href={appStore}><img src="media/appstoreBadge.svg" style={{width:"175px"}}/></a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LeftSection