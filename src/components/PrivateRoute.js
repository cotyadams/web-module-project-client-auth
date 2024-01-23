import React from "react";
import { Route, useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, altElement, path, ...rest }) => {
    const navigate = useNavigate()
    return (
        <>
            {
                localStorage.getItem('token') ?
                    <Route element={element} path='/FriendsList'/> 
                    :
                    <Route element={altElement} path='/Login'/>
            }
        </>
    )
}
export default PrivateRoute