import React from "react"
import Home from "./Home";
const LogOut = () => {
    localStorage.clear();
    return (
        <Home />
    )
}
export default LogOut;