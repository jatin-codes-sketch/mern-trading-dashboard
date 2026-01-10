import React from 'react'

const RightSection = ({imageUrl,productName,productDescription,tryDemo,learnMore}) => {
  return (
    <div className="container ">
        <div className="row">

            <div className="col-5 pt-5 pe-5" style={{margin:"103px 0"}} >
                <h1 className='fs-3'>{productName}</h1>
                <p className='fs-5 text-muted' style={{lineHeight:"45px"}}>{productDescription}</p>
                <div className='fs-5'>
                    <a href={tryDemo}  style={{textDecoration:"none"}}>Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
               
                
            </div>

            <div className="col-7 pt-5 text-end">
                <img src={imageUrl} style={{width:"600px"}}/>
            </div>
        </div>
    </div>
  )
}

export default RightSection