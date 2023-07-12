import axios from "axios"

const API = axios.create({
    baseURL : "http://172.16.6.186:8080"
})

export default API