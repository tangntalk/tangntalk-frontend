import axios from "axios";
import { Cookies } from "react-cookie";

const cookies= new Cookies();

const server = axios.create();
server.defaults.baseURL = "http://localhost:8080";
const accessToken = cookies.get("accessToken");

server.defaults.headers={"Authorization":accessToken ? `Bearer ${accessToken}` : ''};


export default server;
