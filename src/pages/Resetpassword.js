import React from "react";
import BreadCrump from "../component/BreadCrump";
import Meta from "../component/Meta";
import Container from "../component/Container";
import Custominput from "../component/Custominput";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../feature/user/userSlice";

const passwordSchema = yup.object({
  password: yup.string().required("Password is Required"),
});

const Resetpassword = () => {
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  console.log(getToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      dispatch(resetPassword({ token: getToken, password: values.password }));
      navigate("/login");
    },
  });
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrump title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-30"
              >
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                />
                <div className="error text-center">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="sumbit">
                      Ok
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Resetpassword;
