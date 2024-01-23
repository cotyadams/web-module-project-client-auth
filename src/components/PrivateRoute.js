import React from "react";
import { Route, useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
                 return localStorage.getItem('token') ?
                    children
                    :
                    <Navigate to='/Login' replace/>
}
export default PrivateRoute

