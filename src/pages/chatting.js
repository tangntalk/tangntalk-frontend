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

import * as api from "../util/api";

function ChattingPage(props) {
    const { username, opponent } = useParams();
    const [chatroomid, setChatroomid] = useState(-1);
    const [mesasgeList, setMessageList] = useState([]);
    const [isloading, setLoading] = useState(3);
    const [newMessage, setNewMessage] = useState('');
    const [time, setTime] = useState(-1);
    const [customTime, setCustomTime] = useState(false);
    const [messageCount, setMessageCount] = useState(0);
    const [opponentInfo, setOpponentInfo] = useState([]);
    const [countRefreshInterval] = useState(1000);
    const [messageRefreshInterval] = useState(10000);
    const [doScroll, setDoScroll] = useState(false);
    var messagesEnd = React.createRef();

    const scrollToBottom = () => {
        if (doScroll === true) {
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
            setDoScroll(false);
        }
    }

    const handleTime = (event) => {
        setTime(parseInt(event.target.value));
    }
    const handleMessage = (event) => {
        setNewMessage(event.target.value);
    }

    const getOpponentInfo = () => {
        api.user(opponent)
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

    const sendNewMessage = () => {
        while (chatroomid === -1) initializePage();
        api.chatSend(username, chatroomid.toString(), newMessage, time)
            .then(() => {
                getMessageCount()
            })
    }

    const getMessageCount = () => {
        api.messageCount(username, chatroomid)
            .then(response => {
                setMessageCount(response.data.data.messageCount);
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { alert('메시지 수 확인이 되지 않습니다.') };
            })
    }

    const getMessages = () => {
        api.chatList(username, chatroomid)
            .then(response => {
                const {data} = response.data
                if (messageCount !== data.messageList.length) {
                    setMessageCount(data.messageList.length)
                }
                setMessageList(data.messageList);
                setDoScroll(true);
                if (response.data.success) { setLoading((isloading) => (isloading - 1)); }
                else alert('요청한 사용자가 존재하지 않습니다');
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { alert('메시지 조회 중에 문제가 생겼습니다.') };
            })
    }

    const initializePage = () => {
        api.chatroomEnter(username, opponent)
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

    const [rendezvous, setRendezvous] = useState({});
    const addRendezvous = (time) => {
        setRendezvous(list => ({ ...list, [time]: true }));
    };
    const checkRendezvous = () => {
        const nowDate = new Date();
        if (!(Object.keys(rendezvous).length === 0)) {
            for (let time of Object.keys(rendezvous)) {
                if (time < nowDate) {
                    setRendezvous(list => ({ ...list, [time]: false }));
                }
            }
        }
    }
    setInterval(checkRendezvous, 1000);


    const goChatList = () => props.history.push(`/chat/${username}`);
    useEffect(() => {
        if (countRefreshInterval && countRefreshInterval > 0 && messageRefreshInterval && messageRefreshInterval > 0) {
            const interval = setInterval(getMessageCount, countRefreshInterval);
            const interval2 = setInterval(getMessages, messageRefreshInterval);
            return () => {
                clearInterval(interval);
                clearInterval(interval2);
            };
        }
    }, [countRefreshInterval, messageRefreshInterval, chatroomid]);

    useEffect(initializePage, [chatroomid, username, opponent]);
    useEffect(getOpponentInfo, [opponent]);
    useEffect(getMessageCount, [messageCount, chatroomid, username]);
    useEffect(getMessages, [messageCount, chatroomid, username]);
    useEffect(scrollToBottom, [mesasgeList, doScroll]);


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
                    {mesasgeList.map((message) => {
                        if (message.senderId === username) {
                            if (message.rendezvousFlag === true) {
                                return (
                                    <Message receive readOrNot={message.readTime} rendezvous={message.rendezvousLocation + ", " + message.rendezvousTime.substr(11, 8)}
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
                                const nowDate = new Date();
                                const rendezvousDate = new Date(message.rendezvousTime);
                                addRendezvous(rendezvousDate);
                                if (rendezvousDate > nowDate) {
                                    return (
                                        <Message hide={rendezvous[rendezvousDate]} send readOrNot={message.readTime} rendezvous={message.rendezvousLocation + ", " + message.rendezvousTime.substr(11, 8)}
                                            date={message.sendTime.substr(0, 10)} time={message.sendTime.substr(11, 8)}>
                                            {message.content}
                                        </Message>
                                    )
                                }
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