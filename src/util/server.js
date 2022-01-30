import axios from "axios";
import { Cookies } from "react-cookie";

const cookies= new Cookies();

const server = axios.create();

const accessToken=cookies.get("accessToken");

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    server.defaults.baseURL = "http://localhost:8080";
} else {
    server.defaults.baseURL = "http://165.132.105.26:8201";
}

if((accessToken==!null) && (accessToken==!undefined)){
    server.defaults.headers={"Authorization":accessToken ? `Bearer ${accessToken}` : ''};
}


export default server;
