import server from "./server";

// User
export const login = (id, password) => server.post('/login', { accountId: id, password: password });
export const register = (id, password, name, type) => server.post('/register', { accountId: id, password: password, name: name, type: type });
export const user = (accountId) => server.get(`/accounts/${accountId}`);
export const userDelete = (accountId) => server.delete(`/accounts/${accountId}`);
export const updateUserLocation = (accountId, locationName) => server.patch(`/accounts/${accountId}/myinfo`, { locationName: locationName});
export const updateAccountStatus = (accountId, statusMessage) => server.patch(`/accounts/${accountId}/myinfo`, { statusMessage: statusMessage });
export const logout = (accountId) => server.post(`${accountId}/logout`);

// Friend
export const friendList = (accountId) => server.get(`/accounts/${accountId}/friends`);
export const friendAdd = (accountId, friendId) => server.post(`/accounts/${accountId}/friends`, { friendId: friendId });
export const friendSearch = (accountId, search) => server.get(`/accounts/${accountId}/friends/search?query=${search}`);
export const friendDelete = (accountId, friendId) => server.delete(`/accounts/${accountId}/friends/${friendId}`);
export const friendNearby = (accountId, location) => server.get(`/accounts/${accountId}/nearby/${location}`);
export const friendCheck = (accountId, friendId) => server.get(`/accounts/${accountId}/friends/${friendId}`);

// Chat
export const chatroomList = (accountId) => server.get(`/accounts/${accountId}/chatrooms`);
export const chatroomEnter = (accountId, opponentId) => server.post(`/accounts/${accountId}/chatrooms`, { opponentId: opponentId});
export const chatList = (accountId, chatroomId) => server.get(`/accounts/${accountId}/chatrooms/${chatroomId}`);
export const chatSend = (accountId, chatroomId, content, rendezvousTime) => server.post(`/accounts/${accountId}/chatrooms/${chatroomId}`, {content: content, rendezvousTime: rendezvousTime});
export const messageCount = (accountId, chatroomId) => server.get(`accounts/${accountId}/chatrooms/${chatroomId}/count`);
