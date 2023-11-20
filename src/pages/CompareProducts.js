import React from "react";
import BreadCrump from "../component/BreadCrump";
import Meta from "../component/Meta";
import Color from "../component/Color";
import Container from "../component/Container";
const CompareProducts = () => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrump title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-2 mt-3">$ 100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-2 mt-3">$ 100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand:</h5>
                    <p>Havels</p>
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Type:</h5>
                    <p>Watch</p>
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Availability:</h5>
                    <p>In Stock</p>
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Color:</h5>
                    <Color />
                  </div>{" "}
                  <div className="product-detail">
                    <h5>Size:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
