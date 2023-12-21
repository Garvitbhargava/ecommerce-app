import React, { useEffect } from "react";
import BreadCrump from "../component/BreadCrump";
import Meta from "../component/Meta";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";
import Container from "../component/Container";
import { useDispatch, useSelector } from "react-redux";
import { getABlog } from "../feature/blogs/blogSlice";

const SingleBlog = () => {
  const blogState = useSelector((state) => state.blog?.singleBlog || []);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    getBlog();
  }, []);

  const getBlog = () => {
    dispatch(getABlog(getBlogId));
  };

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrump title={blogState?.title} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">{blogState?.title} </h3>
              <img
                src={blogState?.images ? blogState?.images : blog}
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p
                dangerouslySetInnerHTML={{ __html: blogState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
