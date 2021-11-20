import server from "./server";

// User
export const login = (id, password) => server.post('/login', { user_id: id, password: password });
export const register = (id, password, name, type) => server.post('/register', { user_id: id, password: password, name: name, type: type });
export const user = (user_id) => server.get(`/users/${user_id}`);
export const userDelete = (user_id) => server.delete(`/users/${user_id}`);
export const userLocation = (user_id, location_name) => server.post(`/users/${user_id}/location`, { location_name: location_name});
export const userStatus = (user_id, status_message) => server.post(`/users/${user_id}/status`, { status_message: status_message });
export const logout = () => server.post(`/logout`);

// Friend
export const friendList = (user_id) => server.get(`/users/${user_id}/friends`);
export const friendAdd = (user_id, friend_id) => server.post(`/users/${user_id}/friends`, { friend_id: friend_id });
export const friendSearch = (user_id, search) => server.get(`/users/${user_id}/friends/search?query=${search}`);
export const friendDelete = (user_id, friend_id) => server.delete(`/users/${user_id}/friends/${friend_id}`);
export const friendNearby = (user_id) => server.get(`/users/${user_id}/nearby`);

// Chat
export const chatroomList = (user_id) => server.get(`/users/${user_id}/chatrooms`);
export const chatroomEnter = (user_id, opponent_id) => server.post(`/users/${user_id}/chatrooms`, { opponent_id: opponent_id});
export const chatList = (user_id, chatroom_id) => server.get(`/users/${user_id}/chatrooms/${chatroom_id}`);
export const chatSend = (user_id, chatroom_id, content, rendezvous_time, message_location) => server.post(`/users/${user_id}/chatrooms/${chatroom_id}`, {content: content, rendezvous_time: rendezvous_time , message_location: message_location});
