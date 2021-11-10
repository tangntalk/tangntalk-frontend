import server from "./server";

// 회원
export const login = (id, password) => server.post('/login', {user_id: id, password: password});
export const register = (id, password, name, type) => server.post('/login', {user_id: id, password: password, name: name, type: type});

// 회원정보
//export const viewMyInfo = ()