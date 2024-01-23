import { ON_CHANGE, ON_SUBMIT } from "./actionTypes"
import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from "../api/axiosWithAuth";
export const onChange = (e) => {
    return {
        type: ON_CHANGE,
        payload: {
            name: e.target.name,
            value: e.target.value
        }
    }
}
export const onSubmit = (credentials, e) => {
    e.preventDefault();
    axios
        .post('http://localhost:9000/api/login', credentials)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            <Navigate to='/FriendsList'/>
        })
        .catch((err) => {
            console.error(err)
        })
    return {
        type: ON_SUBMIT
    }
}