import server from "./server";

// User
export const login = (id, password) => server.post('/login', { account_id: id, password: password });
export const register = (id, password, name, type) => server.post('/register', { account_id: id, password: password, name: name, type: type });
export const user = (account_id) => server.get(`/accounts/${account_id}`);
export const userDelete = (account_id) => server.delete(`/accounts/${account_id}`);
export const updateUserLocation = (account_id, location_name) => server.patch(`/accounts/${account_id}/myinfo`, { location_name: location_name});
export const updateAccountStatus = (account_id, status_message) => server.patch(`/accounts/${account_id}/myinfo`, { status_message: status_message });
export const logout = (account_id) => server.post(`${account_id}/logout`);

// Friend
export const friendList = (account_id) => server.get(`/accounts/${account_id}/friends`);
export const friendAdd = (account_id, friend_id) => server.post(`/accounts/${account_id}/friends`, { friend_id: friend_id });
export const friendSearch = (account_id, search) => server.get(`/accounts/${account_id}/friends/search?query=${search}`);
export const friendDelete = (account_id, friend_id) => server.delete(`/accounts/${account_id}/friends/${friend_id}`);
export const friendNearby = (account_id, location) => server.get(`/accounts/${account_id}/nearby/${location}`);
export const friendCheck = (account_id, friend_id) => server.get(`/accounts/${account_id}/friends/${friend_id}`);

// Chat
export const chatroomList = (account_id) => server.get(`/accounts/${account_id}/chatrooms`);
export const chatroomEnter = (account_id, opponent_id) => server.post(`/accounts/${account_id}/chatrooms`, { opponent_id: opponent_id});
export const chatList = (account_id, chatroom_id) => server.get(`/accounts/${account_id}/chatrooms/${chatroom_id}`);
export const chatSend = (account_id, chatroom_id, content, rendezvous_time) => server.post(`/accounts/${account_id}/chatrooms/${chatroom_id}`, {content: content, rendezvous_time: rendezvous_time});
export const messageCount = (account_id, chatroom_id) => server.get(`accounts/${account_id}/chatrooms/${chatroom_id}/count`);
