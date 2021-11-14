import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import RadioButton from "../components/RadioButton";
import BlueButton from "../components/BlueButton";
import Message from "../components/Message";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG, Space } from "../styles/style";

function ChattingPage(props) {
    const { user_id } = useParams();

    const goChatList = () => props.history.push(`/chat/${user_id}`);
    
    const [userType, setUserType] = useState('GENERAL');
    return (
        <>
            <Header back title="박효정" function={goChatList}>
            </Header>
            <ContainerSpace paddingBottom="200px">
                <ContainerContentG minHeight="calc(100vh - 250px)">
                    <div></div>
                    <Message send rendezvous={"공학관, 14:01:21까지"} date={"2021-9-4"} time={"15:31:21"}>오늘 뭐먹었어</Message>
                    <Message receive date={"2021-9-4"} time={"15:31:21"}>콩나물 국밥 시켜 먹었어</Message>
                    <Message receive date={"2021-9-4"} time={"15:31:21"}>메밀 전병이랑</Message>
                    <Message send rendezvous={"공학관, 14:01:21까지"} date={"2021-9-4"} time={"15:31:21"}>이거 자꾸 파랑색으로 가는데 왜 그러는 걸까</Message>
                    <Message receive date={"2021-9-4"} time={"15:31:21"}>동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산 동해물과 백두산</Message>
                    <div></div>
                </ContainerContentG>
            </ContainerSpace>
            <NaviSpace>
                <NaviContent>
                    <div>
                        <ChatInput></ChatInput>
                    </div>
                    <div>
                        <BlueButton width="90px" height="40px">전송</BlueButton>
                        <Space></Space>
                        <RadioButton onClick={() => setUserType('GENERAL')} selected={userType === 'GENERAL'}>일반</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => setUserType('30')} selected={userType === '30'}>30분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => setUserType('60')} selected={userType === '60'}>60분</RadioButton>
                        <Space></Space>
                        <RadioButton onClick={() => setUserType('custom')} selected={userType === 'custom'}>
                            <TimeInput></TimeInput> 분
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