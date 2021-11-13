import React, { useState } from "react";

import Header from "../components/Header";
import RadioButton from "../components/RadioButton";
import BlueButton from "../components/BlueButton";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG, Space } from "../styles/style";

function ChattingPage(props) {
    const goChatList = () => props.history.push('/chat');
    const [userType, setUserType] = useState('GENERAL');
    return (
        <>
            <Header back title="박효정" function={goChatList}>
            </Header>
            <ContainerSpace paddingBottom="200px">
                <ContainerContentG minHeight="calc(100vh - 250px)">
                    <Send>
                        <ChatBox>힘들다 망할</ChatBox>
                    </Send>
                    <Receive>
                        <ChatBox2>ㅋㅋㅋㅋ</ChatBox2>
                    </Receive>
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
    border-radius:5px;
    &:focus {
        outline: none;
    }
    @media only screen and (max-width: 600px) {
        width:calc(100% - 30px);
    }
`
export const Send = styled.div`
    width:90%;
    display:flex;
    justify-content:start;
`
export const Receive = styled.div`
    width:90%;
    display:flex;
    align-items:end;
`
export const ChatBox = styled.div`
    padding:10px;
    position:relative;
    width:180px;
    min-height:60px;
    background-color:#ffffff;
    border:none;
    border-radius: 10px;
    :before {
    border-top:15px solid #ffffff;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    top:10px;
    left:-15px;
    }
`
export const ChatBox2 = styled.div`
    padding:10px;
    position:relative;
    width:180px;
    min-height:60px;
    background-color:#ffffff;
    border:none;
    border-radius: 10px;
    :before {
    border-top:15px solid #ffffff;
    border-left: 0px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    top:10px;
    left:200px;
    }
`