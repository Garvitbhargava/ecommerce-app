import React from 'react'
import BreadCrump from '../component/BreadCrump'
import Meta from '../component/Meta'
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi"
import Container from '../component/Container'
import * as yup from 'yup'
import {useFormik} from 'formik'
import {useDispatch} from "react-redux"
import { createQuery } from '../feature/contact/contactSlice'


const contactSchema = yup.object({
 name: yup.string().required("Name is Required"),
 email: yup.string().email("Email should be valid.").required("Email is Required"),
 mobile: yup.string().required("Mobile Number i  Required"),
 comment: yup.string().required("Comment is Required"),
});

const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      email: '',
      comment:'',
    },

    validationSchema: contactSchema,
    onSubmit: values => {
    dispatch(createQuery(values))
    },
  });
  return (
   <>
    <Meta title={"Contact Us"} />
    <BreadCrump title="Contact Us" />
    <Container class1='contact-wrapper py-5 home-wrapper-2'>
      
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7070.992357078841!2d75.1378898476509!3d27.609145554955845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396ca4c902900001%3A0x1f587d15c4c03ce4!2sRachit%20Computers!5e0!3m2!1sen!2sin!4v1693826554217!5m2!1sen!2sin" 
          width="600"
          height="450" 
         className='border-0 w-100'
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">

          </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
               <h3 className='contact-title mb-4'>Contact</h3>
               <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input 
                  type='text' 
                  className='form-control'
                  placeholder='Name'
                  name='name'
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                  value={formik.values.name}/>

                  <div className='error'>
                    {
                      formik.touched.name && formik.errors.name
                    }
                  </div>
                </div>
                <div>
                  <input 
                  type='email'
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}/>

                  <div className='error'>
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                </div>
                <div>
                  <input 
                  type='tel' 
                  className='form-control'
                  placeholder='Mobile Number'
                  name='mobile'
                  
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                  value={formik.values.mobile}/>

                  <div className='error'>
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                </div>
                <div>
                 <textarea
                 id=''
                 className='w-100 form-control'
                 cols="30"
                 rows="4"
                 placeholder='Comments'
                 name='comment'
                 onChange={formik.handleChange("comment")}
                 onBlur={formik.handleBlur("comment")}
                 value={formik.values.comment}>
                 </textarea>
                 <div className='error'>
                    {
                      formik.touched.comment && formik.errors.comment
                    }
                  </div>
                </div>
              <div>
              <button className='button border-0'>Sumbit</button>
              </div>
               </form>
              </div>
              <div>
               <h3 className='contact-title mb-4'>Get in Touch with Us</h3>
               <div>
                <ul className='ps-0'>
                  <li  className='mb-3 d-flex gap-15 align-items-center'>
                 <AiOutlineHome className='fs-5'/>
                 <address className='mb-0'>Shop-No : C-104 ,Rachit Computers,Sikar, Rajasthan</address>
                    </li>
                  <li  className='mb-3 d-flex gap-15 align-items-center'>
                  <BiPhoneCall className='fs-5'/>
                  <a href='tel:+91 9414039906'>+91-9414039906</a>
                    </li>
                  <li  className='mb-3 d-flex gap-15 align-items-center'>
                 <AiOutlineMail className='fs-5'/>
                 <a href='mailto:rachitsikar@gmail.com'>
                  rachitsikar@gmail.com
                 </a>
                    </li>
                  <li  className='mb-3 d-flex gap-15 align-items-center'>
                   <BiInfoCircle className='fs-5'/>
                   <p className='mb-0'> Monday-Friday 10 AM-8 PM</p>
                    </li>
                </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
      
    </Container>
   </>
  )
}

export default Contact