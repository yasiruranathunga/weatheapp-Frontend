import axios from "axios";

const URL = `https://weatherapp-backend-i7z6.onrender.com/api/v1`


const addNewUser = (data) => {
    return axios.post(URL + "/user_um", data)
}

const loginUser = (data) => {
    return axios.post(URL + "/user_validate", data)
}

export default { addNewUser, loginUser}