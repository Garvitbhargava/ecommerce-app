import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import Container from '../component/Container'

const ShippingPolicy = () => {
  return (
   <>
    <Meta title={"Shipping Policy"} />
 <BreadCrump title="Shipping Policy" />
 <Container class1='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='policy'></div>
            </div>
        </div>

 </Container>
   </>
  )
}

export default ShippingPolicy