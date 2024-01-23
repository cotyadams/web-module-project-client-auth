// login req path http://localhost:9000/api/login
import axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axiosWithAuth.create({
        baseURL: 'http://localhost:9000/api/login',
        headers: {authorization: token}
    })
}
export default axiosWithAuth;