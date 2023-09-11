import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import Container from '../component/Container'

const TermsAndCondition = () => {
  return (
    <>
     <Meta title={"Term And Condition"} />
 <BreadCrump title="Term And Condition" />

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

export default TermsAndCondition