import React from "react"
import { connect } from "react-redux"
import { onChange } from "../state/actionCreators"
const Login = (props) => {
    const onChange = (e) => {
        props.onChange(e)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(props.username, props.password)
    }
    return (
        <div>
            <h1>Log In</h1>
            <form >
                <input
                    type="text"
                    name="username" placeholder="username"
                    onChange={onChange}
                    value={props.username}
                />
                <input
                    type="text"
                    name="password" placeholder="password"
                    onChange={onChange}
                    value={props.password}
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
export default connect(mapStateToProps, {onChange})(Login)