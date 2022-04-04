import server from "./server";

// User
export const login = (account_id, password) => server.post('/login', { account_id: account_id, password: password });
export const register = (account_id, password, name, type) => server.post('/register', { account_id: account_id, password: password, name: name, type: type });
export const user = (account_id) => server.get(`/accounts/${account_id}`);
export const userDelete = (account_id) => server.delete(`/accounts/${account_id}`);
export const userLocation = (account_id, location_name) => server.post(`/accounts/${account_id}`, { location_name: location_name});
export const userStatus = (account_id, status_message) => server.post(`/accounts/${account_id}`, { status_message: status_message });
export const logout = (account_id) => server.post(`${account_id}/logout`);

// Friend
export const friendCheck = (account_id, friend_id) => server.get(`/accounts/${account_id}/friends/${friend_id}`);

export const friendList = (account_id) => server.get(`/accounts/${account_id}/friends`);
export const friendAdd = (account_id, friend_id) => server.post(`/accounts/${account_id}/friends`, { friend_id: friend_id });
export const friendSearch = (account_id, search) => server.get(`/accounts/${account_id}/friends/search?query=${search}`);
export const friendDelete = (account_id, friend_id) => server.delete(`/accounts/${account_id}/friends/${friend_id}`);
export const friendNearby = (account_id, location) => server.get(`/accounts/${account_id}/nearby/${location}`);


// Chat
export const chatroomList = (account_id) => server.get(`/users/${account_id}/chatrooms`);
export const chatroomEnter = (account_id, chatroom_id) => server.get(`/users/${account_id}/chatrooms/${chatroom_id}`);
export const chatList = (account_id) => server.get(`/users/${account_id}/chatrooms`);
export const chatSend = (account_id, chatroom_id, content, rendezvous_time) => server.post(`/users/${account_id}/chatrooms/${chatroom_id}`, {content: content, rendezvous_time: rendezvous_time});
export const messageCount = (account_id, chatroom_id) => server.get(`/${account_id}/chatrooms/${chatroom_id}/count`);
