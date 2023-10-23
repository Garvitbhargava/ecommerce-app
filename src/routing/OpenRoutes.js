import { Navigate } from "react-router-dom";






export const OpenRoutes =({childern}) => {
    const getTokenFromLocalStorage = localStorage.getItem("token")
    console.log(getTokenFromLocalStorage?.token);
   return getTokenFromLocalStorage?.token === undefined ? childern : (<Navigate to='/home' replace={true} />)
}