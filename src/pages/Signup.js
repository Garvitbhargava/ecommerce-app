import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import Container from '../component/Container'
import Custominput from '../component/Custominput'
const Signup = () => {
  return (
  <>
    <Meta title={"Sign Up"} />
 <BreadCrump title="Sign up" />
 <Container class1='login-wrapper py-5 home-wrapper-2'>

  <div className='row'>
     <div className='col-12'>
        <div className='auth-card'>
    <h3 className='text-center mb-3'>Sign Up</h3>
    <form action='' className='d-flex flex-column gap-30'>
      <Custominput  type='text' 
          name='name' 
          placeholder='First Name' 
          />
       <Custominput 
        type='email' 
          name='email' 
          placeholder='Email' 
          />   
          <Custominput 
            type='tel' 
          name='mobile number' 
          placeholder='Mobile' 
          />

          <Custominput 
             type='password' 
          name='password' 
          placeholder='Password' 
         />
        <div>
        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
            <button className='button border-0' type='sumbit'>Sing Up</button>
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

export default Signup