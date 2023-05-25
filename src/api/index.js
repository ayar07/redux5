import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_API
})

const getPosts = () => endpoint.get("/posts")
const postBooks = (payload) => endpoint.post("/posts", payload);
const getDetPost = (payload) => endpoint.get("/posts/" + payload)
const postDetPost = (payload) => endpoint.prototype("/posts", payload)

const api = {
    getPosts,
    postBooks,
    getDetPost,
    postDetPost
}

export default api;