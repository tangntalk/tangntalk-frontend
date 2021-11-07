import axios from "axios";

const server = axios.create();
server.defaults.baseURL = "http://54.180.165.50:8080";

export default server;