import React, { useEffect } from "react";
import BreadCrump from "../component/BreadCrump";
import Meta from "../component/Meta";
import Container from "../component/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../feature/user/userSlice";
import { addToWishlist } from "../feature/products/productSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const initialState = {
    wishlist: [], // Initialize as an empty array
    // other properties
  };
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector(
    (state) => state.auth.addToWishlist?.wishlist || []
  );
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  console.log(wishlistState, 'wishlistState')
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrump title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {wishlistState && wishlistState.length > 0
            ? wishlistState?.map((item, index) => {
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
                    <img
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                      src="images/cross.svg"
                      alt="cross"
                      className="position-absolute cross img-fluid"
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={item?.images[0].url}
                        className="img-fluid w-100"
                        alt="watch"
                      />
                    </div>
                    <div className="py-3 px-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">{item?.price}</h6>
                    </div>
                  </div>
                </div>;
              })
            : ""}
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8 GB ROM 7 INCH With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
