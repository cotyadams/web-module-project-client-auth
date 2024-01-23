import React from "react";
import { Route, useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, altElement, path, ...rest }) => {
    const navigate = useNavigate()
    return (
        <Route
            path={path}
            render={localStorage.getItem('token') ?
                <element />
                :
                <altElement />
        }
        />
    )
}
export default PrivateRoute