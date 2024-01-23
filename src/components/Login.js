import React from "react"
import { connect } from "react-redux"
import { onChange, onSubmit } from "../state/actionCreators"
import { useNavigate } from "react-router-dom"
import '../App.css'
import { Navigate } from "react-router-dom"


const Login = (props) => {
    const onChange = (e) => {
        props.onChange(e);
    }
    const onTestSubmit = (e) => {
        const navigate = useNavigate();
        e.preventDefault();
        console.log('inside onSubmit funct')
        props.onSubmit(e);

        // <Navigate to='FriendsList' />
        axios
        .post('http://localhost:9000/api/login', credentials)
        .then((res) => {
            localStorage.setItem('token', res.data.token);
            return navigate('/FriendsList')
        })
        .catch((err) => {
            console.error(err)
        })
        
    }
    return (
        <div className="login-div">
            <h1>Log In</h1>
            <form onSubmit={() => {
                onTestSubmit;
                props.onSubmit;
            }} className="login-form">
                <label
                    htmlFor="username-input"
                    className="input-label"
                >username</label>
                <input
                    id="username-input"
                    type="text"
                    name="username"
                    onChange={onChange}
                    value={props.username}
                    className="input"
                />
                <label
                    htmlFor="password-input"
                    className="input-label"
                >password</label>
                <input
                    type="text"
                    id="password-input"
                    name="password"
                    onChange={onChange}
                    value={props.password}
                    className="input"
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        username: state.login.username,
        password: state.login.password
    }
}
export default connect(mapStateToProps, {onChange, onSubmit})(Login)