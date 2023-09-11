import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import Container from '../component/Container'
import Custominput from '../component/Custominput'

const Resetpassword = () => {
  return (
  <>
   <Meta title={"Reset Password"} />
 <BreadCrump title="Reset Password" />
 <Container class1='login-wrapper py-5 home-wrapper-2'>
  
   <div className='row'>
     <div className='col-12'>
        <div className='auth-card'>
    <h3 className='text-center mb-3'>Reset Password</h3>
    <form action='' className='d-flex flex-column gap-30'>
      <Custominput    
      type='password' 
          name='password' 
          placeholder='New Password'  
          />
        
        <Custominput 
           type='password' 
           name='confpassword' 
           placeholder='Confirm Password' 
           />
        <div>
        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
            <button className='button border-0' type='sumbit'>Ok</button>
        </div>
        </div>
    </form>
        </div>
        </div>   
    </div>
   
 </Container>
  
  </>
  )
}

export default Resetpassword