import { ON_CHANGE, ON_SUBMIT } from "./actionTypes"
import React from "react";
import { Navigate, redirect, useNavigate} from "react-router-dom";
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

export const onSubmit = (e) => {
    e.preventDefault();
    console.log('inside creator')
    return {
        type: ON_SUBMIT
    }
}