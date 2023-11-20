import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../component/BlogCard";
import ProductCard from "../component/ProductCard";
import SpecialProduct from "../component/SpecialProduct";
import Container from "../component/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../feature/blogs/blogSlice";
import moment from "moment";
import { getAllProducts } from "../feature/products/productSlice";
import { useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import camera from "../images/camera.jpeg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../feature/products/productSlice";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
const Home = () => {
  const blogState = useSelector((state) => state.blog?.blog || []);
  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate();

  console.log(productState);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
    getallProducts();
  }, []);

  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  const getallProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded"
                alt="main-banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>
                  From $999.00 or $41.62/mo.
                  <br />
                  for 24 mo.Footnote*
                </p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between aling-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>best sale.</h4>
                  <h5>Laptops Max.</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival.</h4>
                  <h5>Buy IPad Air.</h5>
                  <p>
                    From $599.00 or <br />
                    $49.91/mo.for 12 mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% off</h4>
                  <h5>Smartwatch 7.</h5>
                  <p>
                    Shop the latest band <br /> styles and color
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded"
                  alt="main-banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>free engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    High-fidelity playback &<br /> ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex aling-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* <Container class1="home-wrapper-2 py-2">
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
</Container> */}

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "featured") {
                  return (
                    <div key={index} className={"col-3"}>
                      <div className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          >
                            <img src={wish} alt="wish" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid"
                            alt="product image"
                            width={250}
                          />
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid"
                            alt="product image"
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.totalrating.toString()}
                            edit={false}
                            activeColor="#ffd700"
                          />

                          <p className="price">${item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-10">
                            {/* <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare'/>
                        </button>  */}
                            <button className="border-0 bg-transparent">
                              <img
                                onClick={() =>
                                  navigate("/product/" + item?._id)
                                }
                                src={view}
                                alt="view"
                              />
                            </button>
                            {/* <button className='border-0 bg-transparent'>
                        <img src={addcart} alt='add-cart'/>
                        </button>   */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "special") {
                  return (
                    <SpecialProduct
                      key={index}
                      id={item?._id}
                      brand={item?.brand}
                      title={item?.title}
                      totalrating={item?.totalrating?.toString()}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                      images={item?.images[0]?.url}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item?.tags === "popular") {
                  return (
                    <div key={index} className={"col-3"}>
                      <div className="product-card position-relative">
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          >
                            <img src={wish} alt="wish" />
                          </button>
                        </div>
                        <div className="product-image">
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid "
                            alt="product image"
                            width={200}
                          />
                          <img
                            src={item?.images[0]?.url}
                            className="img-fluid "
                            alt="product image"
                            width={150}
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            count={5}
                            size={24}
                            value={item?.totalrating.toString()}
                            edit={false}
                            activeColor="#ffd700"
                          />

                          <p className="price">${item?.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-10">
                            {/* <button className='border-0 bg-transparent'>
                        <img src={prodcompare} alt='compare'/>
                        </button>  */}
                            <button className="border-0 bg-transparent">
                              <img
                                onClick={() =>
                                  navigate("/product/" + item?._id)
                                }
                                src={view}
                                alt="view"
                              />
                            </button>
                            {/* <button className='border-0 bg-transparent'>
                        <img src={addcart} alt='add-cart'/>
                        </button>   */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </Container>

      <Container class1="marque-wrapper py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            {blogState &&
              blogState?.map((item, index) => (
                <div className="col-3" key={index}>
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    images={item?.images[0]?.url}
                    date={moment(item?.createdAt).format(
                      "MMMM Do YYYY, h:mm a"
                    )}
                  />
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
