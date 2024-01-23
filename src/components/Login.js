import React from "react"
import { connect } from "react-redux"
import { onChange, onSubmit} from "../state/actionCreators"
const Login = (props) => {
    const onChange = (e) => {
        props.onChange(e);
    }
    const onSubmit = (e) => {
        props.onSubmit({ username: props.username, password: props.password }, e);
    }
    return (
        <div>
            <h1>Log In</h1>
            <form onSubmit={onSubmit}>
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
export default connect(mapStateToProps, {onChange, onSubmit})(Login)