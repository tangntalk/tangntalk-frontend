import server from "./server";

// User
export const login = (id, password) => server.post('/login', { username: id, password: password });
export const register = (id, password, name, type) => server.post('/register', { username: id, password: password, name: name, type: type });
export const user = (username) => server.get(`/accounts/${username}`);
export const userDelete = (username) => server.delete(`/accounts/${username}`);
export const updateUserLocation = (username, locationName) => server.patch(`/accounts/${username}/myinfo`, { locationName: locationName});
export const updateAccountStatus = (username, statusMessage) => server.patch(`/accounts/${username}/myinfo`, { statusMessage: statusMessage });
// export const logout = (username) => server.post(`${username}/logout`);
export const logout = (username) => server.post(`/logout`);

// Friend
export const friendList = (username) => server.get(`/accounts/${username}/friends`);
export const friendAdd = (username, friendId) => server.post(`/accounts/${username}/friends`, { friendId: friendId });
export const friendSearch = (username, search) => server.get(`/accounts/${username}/friends/search?query=${search}`);
export const friendDelete = (username, friendId) => server.delete(`/accounts/${username}/friends/${friendId}`);
export const friendNearby = (username, location) => server.get(`/accounts/${username}/nearby/${location}`);
export const friendCheck = (username, friendId) => server.get(`/accounts/${username}/friends/${friendId}`);

// Chat
export const chatroomList = (username) => server.get(`/accounts/${username}/chatrooms`);
export const chatroomEnter = (username, opponentId) => server.post(`/accounts/${username}/chatrooms`, { opponentId: opponentId});
export const chatList = (username, chatroomId) => server.get(`/accounts/${username}/chatrooms/${chatroomId}`);
export const chatSend = (username, chatroomId, content, rendezvousTime) => server.post(`/accounts/${username}/chatrooms/${chatroomId}`, {content: content, rendezvousTime: rendezvousTime});
export const messageCount = (username, chatroomId) => server.get(`accounts/${username}/chatrooms/${chatroomId}/count`);
