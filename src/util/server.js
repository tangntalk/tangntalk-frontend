import axios from "axios";
import { Cookies } from "react-cookie";

// const cookies= new Cookies();

const server = axios.create({
    withCredentials: true
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    server.defaults.baseURL = "http://localhost:8080";
} else {
    server.defaults.baseURL = "http://165.132.105.26:8201";
}

//const accessToken=cookies.get("accessToken");
// if(accessToken!==null&&accessToken!==undefined){
//     server.defaults.headers={"Authorization":`Bearer ${accessToken}`};
// }

// server.interceptors.request.use(
//     function (config) {
//         const accessToken=cookies.get("accessToken");
//         config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// server.interceptors.response.use(
//     function (response) {
//         return response;
//     },
//     function (error) {
//         if (error.response && error.response.status === 401)
//             //여기서 리코일 처리하고 싶은데....
//         return Promise.reject(error);
//     }
// );


export default server;
