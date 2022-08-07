import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import RadioButton from "../components/RadioButton";
import BlueButton from "../components/BlueButton";
import Message from "../components/Message";
import styled from "styled-components";
import colors from "../util/colors"
import Wrapper from "../components/container/Wrapper";
import Content from "../components/container/Content";
import { Space } from "../styles/style";
import {webSocket, alerts} from "../util/stomp"

import * as api from "../util/api";

function ChattingPage(props) {
    const { username, opponent } = useParams();
    const [chatroomid, setChatroomid] = useState(-1);
    const [messageList, setMessageList] = useState([]);
    const [isloading, setLoading] = useState(3);
    const [newMessage, setNewMessage] = useState('');
    const [time, setTime] = useState(-1);
    const [customTime, setCustomTime] = useState(false);
    // const [messageCount, setMessageCount] = useState(0);
    const [opponentInfo, setOpponentInfo] = useState([]);
    const [doScroll, setDoScroll] = useState(false);
    const [refreshInterval, setRefreshInterval] = useState(10000);
    var messagesEnd = React.createRef();
    const socket = webSocket(username);
    const [rendezvous, setRendezvous] = useState({});

    // 채팅 목록 뒤로 가기
    const goChatList = () => props.history.push(`/chat/${username}`);

    // // 가장 최근 메시지로 스크롤링
    // const scrollToBottom = () => {
    //     if (doScroll === true) {
    //         window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    //         setDoScroll(false);
    //     }
    // }

    // 랑데뷰 시간 이벤트 핸들러
    const handleTime = (event) => {
        setTime(parseInt(event.target.value));
    }
    // 메시지 이벤트 핸들러
    const handleMessage = (event) => {
        setNewMessage(event.target.value);
    }

    // 상대방 정보 조회 
    const getOpponentInfo = () => {
        api.friendInfo(opponent)
            .then(response => {
                setOpponentInfo(response.data.data);
                if (response.data.success) { setLoading((isloading) => (isloading - 1)); }
                else alert('요청한 사용자가 존재하지 않습니다');
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { alert('내 정보 조회 중 문제가 생겼습니다.') }
            })
    }

    // 메시지 전송 기능
    const sendNewMessage = () => {
        while (chatroomid === -1) initializePage();
        socket.publish({
            destination: '/pub/chat/message',
            body: JSON.stringify({
                chatroomId: chatroomid,
                senderId: username,
                receiverId: opponent,
                content: newMessage,
                rendezvousTime: time
            }), 
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    const getMessages = () => {
        api.chatList(chatroomid, 0)
            .then(response => {
                const {data} = response.data
                setMessageList(data.messageList);
                const currentTime = new Date();
                data.messageList.filter(message => new Date(message.rendezvousTime) > currentTime && message.rendezvousFlag==true)
                    .forEach(message => {addRendezvous(new Date(message.rendezvousTime))});                 
                setDoScroll(true);
                if (response.data.success) { setLoading((isloading) => (isloading - 1)); }
                else alert('요청한 사용자가 존재하지 않습니다');
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { 
                    console.log("message request failed with error", error);
                    alert('메시지 조회 중에 문제가 생겼습니다.') 
                };
            })
    }

    const initializePage = () => {
        api.chatroomEnter(opponent)
            .then(response => {
                setChatroomid(response.data.data);
                if (response.data.data >= 0) {
                    setLoading((isloading) => (isloading - 1));
                }
                else alert('요청한 채팅방이 존재하지 않습니다');
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { alert('채팅방 조회 중 문제가 생겼습니다.') }

            })
    }

    const addRendezvous = (time) => {
        setRendezvous(list => ({ ...list, [time]: false }));
    };
    const checkRendezvous = () => {
        const nowDate = new Date();
        if (!(Object.keys(rendezvous).length === 0)) {
            for (let time of Object.keys(rendezvous)) {
                if (Date.parse(time) < nowDate) {
                    setRendezvous(list => ({ ...list, [time]: true }));
                }
            }
        }
    }

    useEffect(()=> {
        alerts.onMessage().subscribe((message)=> {
            addMessage(message);
        });
    }, []);

    useEffect(initializePage, [chatroomid, username, opponent]);
    useEffect(getOpponentInfo, [opponent]);
    useEffect(getMessages, [chatroomid, username]);
    useEffect(()=> {
        if(refreshInterval && refreshInterval > 0){
            const interval = setInterval(checkRendezvous, refreshInterval);
            return () => {
                clearInterval(interval);
            }
        }
    })

    const addMessage = (message) => {
        if(message.rendezvousFlag == true){
            addRendezvous(new Date(message.rendezvousTime));
        }
        setMessageList(ml => [...ml,message]);
    }
    
    if (isloading > 0) {
        return (
            <>
                <Header back search title="로딩중입니다"></Header>
            </>
        );
    }

    return (
        <>
            <Header back title={opponentInfo.name} friendAddDel username={username} friendId={opponent} userFunction={goChatList}>
            </Header>
            <Wrapper paddingBottom="240px">
                <Content minHeight="calc(100vh - 290px)" gray>
                    <div></div>
                    {messageList.map((message) => {
                        if (message.senderId === username) {
                            if (message.rendezvousFlag === true) {
                                return (
                                    <Message key={message.messageId} receive readOrNot={message.readTime} rendezvous={message.rendezvousLocation + ", " + message.rendezvousTime.substr(11, 8)}
                                        date={message.sendTime.substr(0, 10)} time={message.sendTime.substr(11, 8)}>
                                        {message.content}
                                    </Message>
                                )
                            }
                            else {
                                return (
                                    <Message receive readOrNot={message.readTime} date={message.sendTime.substring(0, 10)} time={message.sendTime.substr(11, 8)}>
                                        {message.content}
                                    </Message>
                                )
                            }
                        }
                        else {
                            if (message.rendezvousFlag === true) {
                                return (
                                    <Message send readOrNot={message.readTime} rendezvous={message.rendezvousLocation + ", " + message.rendezvousTime.substr(11, 8)}
                                        date={message.sendTime.substr(0, 10)} time={message.sendTime.substr(11, 8)}>
                                        {rendezvous[new Date(message.rendezvousTime)]?"hiden message":message.content}
                                    </Message>
                                )
                            }
                            else {
                                return (
                                    <Message send readOrNot={message.readTime} date={message.sendTime.substring(0, 10)} time={message.sendTime.substr(11, 8)}>
                                        {message.content}
                                    </Message>
                                )
                            }
                        }
                    })}
                    <div ref={messagesEnd}></div>
                </Content>
            </Wrapper>
            <NaviSpace>
                <NaviContent>
                    <div>
                        <ChatInput placeholder="메시지를 입력하세요" onChange={handleMessage}></ChatInput>
                    </div>
                    <div>
                        <BlueButton width="90px" height="40px" onClick={sendNewMessage}>전송</BlueButton>
                        <Space></Space>
                        <RadioButton onClick={() => { setTime(-1); setCustomTime(false); }} selected={time === -1}>일반</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => { setTime(3); setCustomTime(false); }} selected={time === 3}>3분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => { setTime(30); setCustomTime(false); }} selected={time === 30}>30분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => { setTime(60); setCustomTime(false); }} selected={time === 60}>60분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => { setTime(0); setCustomTime(true); }} selected={customTime === true}>
                            <TimeInput onChange={handleTime}></TimeInput> 분
                        </RadioButton>
                    </div>
                </NaviContent>
            </NaviSpace>

        </>
    );
}

export default ChattingPage;

export const NaviSpace = styled.div`
    width:100%;
    height:240;
    box-sizing: border-box;

    position:sticky;
    bottom:0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:white;

    border-top:1px solid ${colors.LIGHT};
`

export const NaviContent = styled.div`
    width:100%;
    max-width:800px;
    height:240px;
    box-sizing: border-box;
    padding:20px 0;

    display: flex;
    align-items:center;
    justify-content:space-around;

    background-color:${colors.WHITE};

    @media only screen and (max-width: 768px) {
        width:100%;
        padding:10px 0;
    }
`

export const TimeInput = styled.input`
    width:40px;
    border:1px solid ${colors.DARK};
    border-radius:5px;
    &:focus {
        outline: none;
    }
`
export const ChatInput = styled.textarea`
    width:600px;
    padding:10px;
    height:150px;
    border:1px solid ${colors.LIGHT};
    font-size:1.2em;
    border-radius:5px;
    &:focus {
        outline: none;
    }
    @media only screen and (max-width: 600px) {
        width:calc(100% - 30px);
    }
`