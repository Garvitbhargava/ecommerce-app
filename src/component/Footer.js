import React from 'react'
import {  Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs'
import newsletter from "../images/newsletter.png"
const Footer = () => {
  return (
   <>
   <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row aling-items-center'>
        <div className='col-5'>
          <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src={newsletter} alt='newsletter' />
            <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
          </div>
        </div>
        <div className='col-7'>
        <div class="input-group ">
  <input type="text" class="form-control py-1" 
  placeholder="Your Email Address..." 
  aria-label="Your Email Address..." 
  aria-describedby="basic-addon2"/>
  <span className="input-group-text p-2" 
  id="basic-addon2">
   Subscribe
    </span>
</div>
        </div>
      </div>
    </div>
   </footer>
   <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-4'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <div>
            <address className='text-white fs-6'>Shop-No : C-104 Rachit Computers,<br/>Sikar Rajasthan<br/>
              Pincode: 332001
            </address>
            <a href='tel:+91 9414039906' className='mt-4 d-block mb-1 text-white'>
              +91 9414039906
              </a>
              <a href='mailto: Rachitsikar@gmail.com' className='mt-4 d-block mb-0 text-white'>
                Rachitsikar@gmail.com
                </a>
                <div className='social-icons d-flex aling-items-center gap-30 mt-4 '>
                  <a className="text-white" href='#'>
                   <BsLinkedin className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href='#'>
                  <BsGithub className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href='#'>
                   <BsYoutube className="text-white fs-4"/>
                  </a>
                  <a className="text-white" href='#'>
                  <BsInstagram className="text-white fs-4"/>
                  </a>
                </div>
          </div>
        </div>
        <div className='col-3'>
        <h4 className='text-white mb-4'>Information</h4>
        <div className='footer-links d-flex flex-column'>
            <Link 
            to='/privacy-policy' 
            className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link 
            to='/refund-policy'  
            className='text-white py-2 mb-1'>Refund policy</Link>
            <Link 
            to='/shipping-policy'  
            className='text-white py-2 mb-1'>Shipping Policy</Link>
            <Link 
            to='/term-conditions'  
            className='text-white py-2 mb-1'>Terms & Conditions</Link>
            <Link 
            to='/blogs' 
            className='text-white py-2 mb-1'>Blogs</Link>
          </div>
        </div>
        <div className='col-3'>
        <h4 className='text-white mb-4'>Account</h4>
        <div className='footer-links d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Search</Link>
            <Link className='text-white py-2 mb-1'>About Us</Link>
            <Link className='text-white py-2 mb-1'>Faq</Link>
            <Link className='text-white py-2 mb-1'>Contact</Link>
            <Link className='text-white py-2 mb-1'>Size Chart</Link>
          </div>
        </div>
        <div className='col-2'>
        <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-links d-flex flex-column'>
          <Link className='text-white py-2 mb-1'>Accessories</Link>
            <Link className='text-white py-2 mb-1'>Laptops</Link>
            <Link className='text-white py-2 mb-1'>Headphones</Link>
            <Link className='text-white py-2 mb-1'>Tablets</Link>
            <Link className='text-white py-2 mb-1'>Watch</Link>
          </div>
        </div>
      </div>
    </div>
   </footer>
   <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
      <p className='text-center mb-0 text-white'>
        &copy: {new Date().getFullYear()}; Powered by Garvit Bhargava
      </p>
        </div>
      </div>
    </div>
   </footer>
   </>
  )
}

export default Footer