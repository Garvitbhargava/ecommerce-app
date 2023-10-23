import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../component/Container'
import Custominput from '../component/Custominput'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { forgotPasswordToken } from '../feature/user/userSlice'





const emailSchema = yup.object({
  email: yup.string().email("Email Should be valid").required("Email Address is Required"),
});







const Forgotpassword = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { 
      email: ''
    },
    validationSchema:emailSchema,
    onSubmit: (values) => {
      dispatch(forgotPasswordToken(values))
      console.log(values,"dsfsffsdfsd");
},
});
  return (
   <>
    <Meta title={"Forgot Password"} />
 <BreadCrump title="Forgot Password" />

 <Container class1='login-wrapper py-5 home-wrapper-2'>

  <div className='row'>
     <div className='col-12'>
        <div className='auth-card'>
    <h3 className='text-center mb-3'>Reset Your Password</h3>
    <p className='text-center mt-2 mb-3'>
       We will send you an email to resert your password 
    </p>
    <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-30'>
      <Custominput 
      type='email' 
      name='email' 
      placeholder='Email'
      onChange={ formik.handleChange("email")}
      onBlur={ formik.handleBlur("email")}
      value={formik.values.email}  />
       <div className='error text-center'>
          {formik.touched.email && formik.errors.email}
        </div>
        <div>
        <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
            <button className='button border-0' type='sumbit'>Sumbit</button>
            <Link to='/login'>Cancel</Link>
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

export default Forgotpassword