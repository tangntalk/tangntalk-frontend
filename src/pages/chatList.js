import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import Title from "../components/Title";
import { ContainerSpace, ContainerContentG } from "../styles/style";
import NaviBar from "../components/NaviBar";

function ChatListPage(props) {
    const { user_id } = useParams();
    
    return (
        <>
            <Header title="채팅 목록">
            </Header>
            <ContainerSpace>
                < ContainerContentG>
                    <Title>진행 중인 채팅</Title>
                    <ChatBox on date="2021-9-4" time="15:31:21" to oppenent="홍길동">지금 어디에요?</ChatBox>
                    <ChatBox off date="2021-9-4" time="15:31:21" from oppenent="이름수 제한 공백포함 10글자">잘 모르겠어요</ChatBox>
                    <ChatBox off date="2021-9-4" time="15:31:21" to oppenent="이주연">
                    과제 좀 그만내 과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내
                    </ChatBox>
                    <ChatBox off date="2021-9-4" time="15:31:21" to oppenent="이주연">
                        과제 좀 그만내 과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내과제 좀 그만내
                    </ChatBox>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar chat id={user_id}>
            </NaviBar>
        </>
    );
}

export default ChatListPage;