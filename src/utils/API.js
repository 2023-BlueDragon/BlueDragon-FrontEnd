import axios from "axios"

const API = axios.create({
    baseURL : "http://15.164.81.241:8080"
})

export default API