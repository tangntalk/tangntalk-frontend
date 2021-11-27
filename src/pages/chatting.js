import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import RadioButton from "../components/RadioButton";
import BlueButton from "../components/BlueButton";
import Message from "../components/Message";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG, Space } from "../styles/style";

import * as api from "../util/api";

function ChattingPage(props) {
    const { user_id, opponent } = useParams();
    const location = useLocation();
    const [chatroomid, setChatroomid] = useState(-1);
    const [mesasgeList, setMessageList] = useState([]);
    const [isloading, setLoading] = useState(2);
    const [newMessage, setNewMessage] = useState('');
    const [time, setTime] = useState(-1);
    const [customTime, setCustomTime] = useState(false);
    var messagesEnd = React.createRef();

    const [refreshInterval, setRefreshInterval] = useState(1000);
    const fetchMetrics = () => {
      getMessages(location.state.chatroom_id);
    }
    useEffect(() => {
      if (refreshInterval && refreshInterval > 0) {
        const interval = setInterval(fetchMetrics, refreshInterval);
        return () => clearInterval(interval);
      }
    }, [refreshInterval]);


    const scrollToBottom = () => {
        messagesEnd.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleTime = (event) => {
        setTime(parseInt(event.target.value));
        console.log(time);
    }
    const handleMessage = (event) => {
        setNewMessage(event.target.value);
        console.log(newMessage);
    }

    const sendNewMessage = () => {
        while(chatroomid === -1) initializePage();
        console.log(newMessage);
        console.log(time);
        api.chatSend(user_id, location.state.chatroom_id.toString(), newMessage, time)
        .then(response =>{
            console.log(response);
            getMessages(location.state.chatroom_id)            
        })
        .then(
            scrollToBottom()
        )
    }
    
    const getMessages = (chatid) => {
        api.chatList(user_id, chatid)
        .then(response =>{
            setMessageList(response.data.messages);
            if(response.data.success){setLoading((isloading)=>(isloading-1));} 
            else alert('요청한 사용자가 존재하지 않습니다');
        })
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('친구 정보 조회 중 문제가 생겼습니다.')};
        })
    }

    var chat_id;
    const initializePage = () =>{
        
        api.chatroomEnter(user_id, opponent)
        .then(response =>{
            chat_id = response.data.chatroom_id;
            setChatroomid(response.data.chatroom_id);
            if(response.data.chatroom_id>=0){
                setLoading((isloading)=>(isloading-1));
            } 
            else alert('요청한 채팅방이 존재하지 않습니다');
        })
        .then(() => {
            getMessages(chat_id);              
        })
        .catch(error => {
            console.log(error);
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('채팅방 조회 중 문제가 생겼습니다.')}
            
        })
    }
    
    const goChatList = () => props.history.push(`/chat/${user_id}`);
    useEffect(initializePage, []);
    

    if(isloading>0){
        return(
            <>
            <Header back search title="로딩중입니다"></Header>
            </>
        );
    }
    
    return (
        <>
            <Header back title={location.state.opponent_name} function={goChatList}>
            </Header>
            <ContainerSpace paddingBottom="200px">
                <ContainerContentG minHeight="calc(100vh - 250px)">
                    <div></div>
                    {mesasgeList.map((message) => {
                        var location_unit = message.rendezvous_location;
                        if(message.rendezvous_flag == false) location_unit = "";
                        if(message.sender_id == user_id){
                            if(message.rendezvous_flag == true){
                                return(
                                    <Message receive rendezvous={message.rendezvous_location +", "+ message.rendezvous_time.substring(11,19)}
                                        date={message.send_time.substring(0,9)} time={message.send_time.substring(11,19)}>
                                        {message.content}
                                    </Message>
                                )
                            }
                            else{
                                return (
                                <Message receive date={message.send_time.substring(0,9)} time={message.send_time.substring(11,19)}> 
                                    {message.content}
                                </Message>
                                )
                            }
                        }
                        else{
                            if(message.rendezvous_flag == true){
                                return(
                                    <Message send rendezvous={message.rendezvous_location+", "+ message.rendezvous_time.substring(11,19)}
                                        date={message.send_time.substring(0,9)} time={message.send_time.substring(11,19)}>
                                        {message.content}
                                    </Message>
                                )
                            }
                            else{
                                return(
                                <Message send date={message.send_time.substring(0,9)} time={message.send_time.substring(11,19)}>
                                    {message.content}
                                </Message>
                                )
                            }
                        }
                    })}
                    <div ref={messagesEnd}></div>
                </ContainerContentG>
            </ContainerSpace>
            <NaviSpace>
                <NaviContent>
                    <div>
                        <ChatInput placeholder="메시지를 입력하세요" onChange={handleMessage}></ChatInput>
                    </div>
                    <div>
                        <BlueButton width="90px" height="40px" onClick={sendNewMessage}>전송</BlueButton>
                        <Space></Space>
                        <RadioButton onClick={() => {setTime(-1);setCustomTime(false);}} selected={time === -1}>일반</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => {setTime(3);setCustomTime(false);}} selected={time === 3}>3분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => {setTime(30);setCustomTime(false);}} selected={time === 30}>30분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => {setTime(60);setCustomTime(false);}} selected={time === 60}>60분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={()=>{setTime(0);setCustomTime(true);}} selected={customTime === true}>
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
    height:200px;
    box-sizing: border-box;

    position:fixed;
    bottom:0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:white;

    border-top:1px solid #ECEBED;
`

export const NaviContent = styled.div`
    width:100%;
    max-width:800px;
    height:200px;
    box-sizing: border-box;
    padding:20px 0;

    display: flex;
    align-items:center;
    justify-content:space-around;

    background-color:#ffffff;

    @media only screen and (max-width: 768px) {
        width:100%;
        padding:10px 0;
    }
`

export const TimeInput = styled.input`
    width:40px;
    border:1px solid #948EA5;
    border-radius:5px;
    &:focus {
        outline: none;
    }
`
export const ChatInput = styled.textarea`
    width:600px;
    padding:10px;
    height:150px;
    border:1px solid #ECEBED;
    font-size:1.2em;
    border-radius:5px;
    &:focus {
        outline: none;
    }
    @media only screen and (max-width: 600px) {
        width:calc(100% - 30px);
    }
`