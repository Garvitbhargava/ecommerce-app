import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import BlogCard from '../component/BlogCard'
import ProductCard from '../component/ProductCard'
import SpecialProduct from '../component/SpecialProduct'
import Container from '../component/Container'
import { services} from '../utils/Data';
const Home = () => {
  return (
  <>
  <Container class1="home-wrapper-1 py-5"> 
  <div className='row'>
      <div className='col-6'>
<div className='main-banner position-relative '>
  <img src='images/main-banner-1.jpg' 
  className="img-fluid rounded" 
  alt='main-banner'/>
  <div className="main-banner-content position-absolute"> 
  <h4>SUPERCHARGED FOR PROS.</h4>
  <h5>iPad S13+ Pro.</h5>
  <p>From $999.00 or $41.62/mo.<br/>for 24 mo.Footnote*</p>
<Link className='button'>BUY NOW</Link>  
  </div>
</div>

       </div>

       <div className='col-6'>
<div className="d-flex flex-wrap gap-10 justify-content-between aling-items-center">
<div className='small-banner position-relative '>
  <img src='images/catbanner-01.jpg' 
  className="img-fluid rounded" 
  alt='main-banner'/>
  <div className="small-banner-content position-absolute"> 
  <h4>best sale.</h4>
  <h5>Laptops Max.</h5>
  <p>From $1699.00 or <br/> $64.62/mo.</p>

  </div>
</div><div className='small-banner position-relative '>
  <img src='images/catbanner-02.jpg' 
  className="img-fluid rounded" 
  alt='main-banner'/>
  <div className="small-banner-content position-absolute"> 
  <h4>new arrival.</h4>
  <h5>Buy IPad Air.</h5>
  <p>From $599.00 or <br/>$49.91/mo.for 12 mo.</p>

  </div>
</div><div className='small-banner position-relative '>
  <img src='images/catbanner-03.jpg' 
  className="img-fluid rounded" 
  alt='main-banner'/>
  <div className="small-banner-content position-absolute"> 
  <h4>15% off</h4>
  <h5>Smartwatch 7.</h5>
  <p>Shop the latest band <br/> styles and color</p>

  </div>
</div><div className='small-banner position-relative '>
  <img src='images/catbanner-04.jpg' 
  className="img-fluid rounded" 
  alt='main-banner'/>
  <div className="small-banner-content position-absolute"> 
  <h4>free engraving</h4>
  <h5>AirPods Max</h5>
  <p>High-fidelity playback &<br/> ultra-low distortion</p>

  </div>
</div>
</div>

       </div>


    </div></Container>

   <Container class1="home-wrapper-2 py-5">
   <div className='row'>
      <div className='col-12'>
        <div className="services d-flex aling-items-center justify-content-between">
  {
    services?.map((i,j) =>  {
      return(
        <div className='d-flex align-items-center gap-15' key={j}>
          <img src={i.image} alt='services'/>
          <div>
            <h6>{i.title}</h6>
            <p className='mb-0'>{i.tagline}</p>
          </div>
        </div>
      )
    })
  }
         
 </div>
      </div>
    </div>
    </Container> 


<section className="home-wrapper-2 py-2">
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
         <div className="d-flex align-items-center">
          <div>
            <h6>Music & Games</h6>
            <p>10 Items</p>
          </div>
          <img src='images/camera.jpg'  alt='camera'/>
         </div> <div className="d-flex gap-30 align-items-center">
          <div>
            <h6>Smart Tv</h6>
            <p>10 Items</p>
          </div>
          <img src='images/tv.jpg'  alt='camera'/>
         </div>
         <div className="d-flex  align-items-center">
          <div>
            <h6>HeadPhone</h6>
            <p>10 Items</p>
          </div>
          <img src='images/headphone.jpg'  alt='camera'/>
         </div>
         <div className="d-flex  align-items-center">
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src='images/camera.jpg'  alt='camera'/>
         </div>
         <div className="d-flex  align-items-center">
          <div>
            <h6>Music & Games</h6>
            <p>10 Items</p>
          </div>
          <img src='images/camera.jpg'  alt='camera'/>
         </div> <div className="d-flex gap-30 align-items-center">
          <div>
            <h6>Smart Tv</h6>
            <p>10 Items</p>
          </div>
          <img src='images/tv.jpg'  alt='camera'/>
         </div>
         <div className="d-flex  align-items-center">
          <div>
            <h6>HeadPhone</h6>
            <p>10 Items</p>
          </div>
          <img src='images/headphone.jpg'  alt='camera'/>
         </div>
         <div className="d-flex align-items-center">
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src='images/camera.jpg'  alt='camera'/>
         </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="featured-wrapper py-5 home-wrapper-2">
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Featured Collection</h3>
      </div>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
    </div>
  </div>
</section>


<section className='special-wrapper py-5 home-wrapper-2'>
  <div className='container-xxl'>
    <div className='row'>
    <div className='col-12'>
        <h3 className='section-heading'>Special Products</h3>
      </div>
    </div>
    <div className='row'>
      <SpecialProduct/>
      <SpecialProduct/>
      <SpecialProduct/>
    </div>
  </div>
</section>
<section className="popular-wrapper py-5 home-wrapper-2">
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Our Popular Products</h3>
      </div>
    </div>
    <div className='row'>
    <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
    </div>
  </div>
</section>


<section className="marque-wrapper py-5">
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
        <div className='marquee-inner-wrapper card-wrapper'>
          <Marquee className="d-flex">
            <div className="mx-4 w-25">
              <img src='images/brand-01.png'  alt='brand'/>
             </div>
              <div className="mx-4 w-25">
              <img src='images/brand-02.png'  alt='brand'/>
              </div>
              <div className="mx-4 w-25">
              <img src='images/brand-03.png'  alt='brand'/>
              </div>
              <div className="mx-4 w-25">
              <img src='images/brand-04.png'  alt='brand'/>
              </div>
              <div className="mx-4 w-25">
              <img src='images/brand-05.png'  alt='brand'/>
              </div>
              <div className="mx-4 w-25">
              <img src='images/brand-06.png'  alt='brand'/>
              </div>
              <div className="mx-4 w-25">
              <img src='images/brand-07.png'  alt='brand'/>
              </div>
              <div className="mx-4 w-25">
              <img src='images/brand-08.png'  alt='brand'/>
              </div>


          </Marquee>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="blog-wrapper py-5 home-wrapper-2">
  <div className='container-xxl'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Our latest Blogs</h3>
      </div>
   
    </div>
    <div className='row'>
      <div className='col-3'>
      <BlogCard/>
      </div>
      <div className='col-3'>
      <BlogCard/>
      </div>
      <div className='col-3'>
      <BlogCard/>
      </div>
      <div className='col-3'>
      <BlogCard/>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Home