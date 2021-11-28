import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import Title from "../components/Title";
import { ContainerSpace, ContainerContentG } from "../styles/style";
import NaviBar from "../components/NaviBar";

import * as api from "../util/api";

function ChatListPage(props) {
    const { user_id } = useParams();
    const [chatList, setChatList] = useState([]);
    const [isloading, setLoading] = useState(1);

    const getChatroom = () => {
        api.chatroomList(user_id)
        .then(response => {
            setChatList(response.data.chatrooms);
            if(response.data.success) setLoading((isloading)=>(isloading-1));
            else alert('요청한 사용자가 존재하지 않습니다');})
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('채팅목록 조회 중 문제가 생겼습니다.')}})
    }
    useEffect(getChatroom, []);
    return (
        <>
            <Header title="채팅 목록">
            </Header>
            <ContainerSpace>
                < ContainerContentG>
                    <Title>진행 중인 채팅</Title>
                    {
                        chatList.map((chat)=>(
                            <ChatBox off={!chat.connection_status} on={chat.connection_status} date={chat.last_send_time.substr(0,9)} to opponent={chat.opponent_name} time={chat.last_send_time.substr(11,18)}
                                            chatroom_id={chat.chatroom_id} id={user_id} opponent_id={chat.opponent_id}>
                                {chat.last_message}
                            </ChatBox>
                    ))}
                    {/* <ChatBox on date="2021-9-4" time="15:31:21" to oppenent="홍길동" rendezvous id="1234" oppenent_id="1234">지금 어디에요?</ChatBox>
                    <ChatBox on date="2021-9-4" time="15:31:21" to oppenent="홍길동" id="1234" oppenent_id="1234">지금 어디에요?</ChatBox>
                    <ChatBox off date="2021-9-4" time="15:31:21" from oppenent="이름수 제한 공백포함 10글자" rendezvous rendezvous id="1234" oppenent_id="1234">잘 모르겠어요</ChatBox>
                    <ChatBox off date="2021-9-4" time="15:31:21" to oppenent="이주연" id="1234" oppenent_id="1234">
                        지금 어디에요? 지금 어디에요? 지금 어디에요? 지금 어디에요? 지금 어디에요? 지금 어디에요? 지금 어디에요? 지금 어디에요? 지금 어디에요? 
                    </ChatBox> */}
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar chat id={user_id}>
            </NaviBar>
        </>
    );
}

export default ChatListPage;