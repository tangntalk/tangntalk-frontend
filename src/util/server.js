import axios from "axios";

const server = axios.create();

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    server.defaults.baseURL = "http://localhost:8080";
} else {
    server.defaults.baseURL = "http://165.132.105.26:8201";
}

export default server;
