import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { authorized } from '../recoil/atom';

import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import Title from "../components/Title";
import NaviBar from "../components/NaviBar";
import Wrapper from "../components/container/Wrapper";
import Content from "../components/container/Content";

import * as api from "../util/api";

function ChatListPage(props) {
    const setAuthorized=useSetRecoilState(authorized);
    
    const { username } = useParams();
    const [chatList, setChatList] = useState([]);
    const [isloading, setLoading] = useState(1);
    const [refreshInterval, setRefreshInterval] = useState(5000);

    const getChatroom = () => {
        api.chatroomList()
        .then(response => {
            const {data} = response.data
            setChatList(data.chatrooms);
            if(response.data.success) setLoading((isloading)=>(isloading-1));
            //if(response.data.success) setLoading(isloading-1); 이러면 작동 안하나? 무한루프도나....
            else alert('요청한 사용자가 존재하지 않습니다');
        })
        .catch(error => {
            if ((error.response && error.response.status === 401)||(error.response && error.response.status === 403)){
                setAuthorized('unauthorized');
            }
            else if (error.request) {
                alert('서버에서 응답이 오지 않습니다.');
            }
            else {
                alert('조회 중 문제가 생겼습니다.');
            }
        })
    }
    useEffect(getChatroom);
    useEffect(()=> {
        if(refreshInterval && refreshInterval > 0){
            const interval = setInterval(getChatroom, refreshInterval);
            return () => {
                clearInterval(interval);
            }
        }
    })
    return (
        <>
            <Header title="채팅 목록">
            </Header>
            <Wrapper navi>
                <Content gray>
                    <Title>진행 중인 채팅</Title>
                    {
                        chatList.map((chat)=>(
                            <ChatBox on={chat.connectionStatus?1:0} date={chat.lastSendTime.substr(0,10)} to opponent={chat.opponentName} time={chat.lastSendTime.substr(11,8)} opponentId={chat.opponentId}>
                                {chat.lastMessage}
                            </ChatBox>
                    ))}
                </Content>
            </Wrapper>
            <NaviBar chat id={username}>
            </NaviBar>
        </>
    );
}

export default ChatListPage;