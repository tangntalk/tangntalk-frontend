import server from "./server";

// User
export const login = (username, password) => server.post('/login', {username:username,  password: password });
export const register = (username, password, name, type) => server.post('/register', {username: username, password: password, name: name, type: type });
export const user = () => server.get(`/accounts`);
export const userDelete = () => server.delete(`/accounts`);
export const updateUserLocation = (locationName) => server.patch(`/accounts/myinfo`, { locationName: locationName});
export const updateAccountStatus = (statusMessage) => server.patch(`/accounts/myinfo`, { statusMessage: statusMessage });
export const logout = () => server.post(`/logout`);

// Friend
export const friendList = () => server.get(`/accounts/friends`);
export const friendAdd = (friendUsername) => server.post(`/accounts/friends`, { friendUsername: friendUsername });
export const friendSearch = (search) => server.get(`/accounts/friends/search?query=${search}`);
export const friendDelete = (friendUsername) => server.delete(`/accounts/friends/${friendUsername}`);
export const friendNearby = (location) => server.get(`/accounts/nearby/${location}`);
export const friendCheck = (friendUsername) => server.get(`/accounts/friends/${friendUsername}`);

// Chat
export const chatroomList = () => server.get(`/accounts/chatrooms`);
export const chatroomEnter = (opponentUsername) => server.post(`/accounts/chatrooms`, { opponentUsername: opponentUsername});
export const chatList = (chatroomId) => server.get(`/accounts/chatrooms/${chatroomId}`);
export const chatSend = (chatroomId, content, rendezvousTime) => server.post(`/accounts/chatrooms/${chatroomId}`, {content: content, rendezvousTime: rendezvousTime});
export const messageCount = (chatroomId) => server.get(`accounts/chatrooms/${chatroomId}/count`);
