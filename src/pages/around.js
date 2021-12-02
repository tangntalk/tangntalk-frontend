import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import RadioButton from "../components/RadioButton";
import Title from "../components/Title";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG, SpaceAround, Space } from "../styles/style";

import * as api from "../util/api";

function AroundPage(props) {
    const { user_id } = useParams();
    const [onlineFriends, setOnlineFriends] = useState([]);
    const [offlineFriends, setOfflineFriends] = useState([]);
    const [refreshInterval, setRefreshInterval] = useState(5000);
    const [location, setLocation] = useState('공학관');

    const getFriendNearby = () =>{
        api.friendNearby(user_id, location)
            .then(response => {
                console.log(response);

                if (!response.data.success) {
                    alert('조회 중 문제가 생겼습니다.');
                }
                else {
                    setOfflineFriends(response.data.offline);
                    setOnlineFriends(response.data.online);
                }
            })
            .catch(error => {
                console.log(error);

                if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else {
                    alert('조회 중 문제가 생겼습니다.');
                }
        });
    }
    
    useEffect(getFriendNearby, [user_id, location]);

    useEffect(()=> {
        if(refreshInterval && refreshInterval > 0){
            const interval = setInterval(getFriendNearby, refreshInterval);
            return () => {
                clearInterval(interval);
            }
        }
    })

    return (
        <>
            <Header search title="내 주변" id={user_id}>
            </Header>
            <ContainerSpace>
                <ContainerContentG>
                    <White>
                        <Title>위치</Title>
                        <SpaceAround height="80px">
                            <RadioButton onClick={() => setLocation('공학관')} selected={location === '공학관'}>공학관</RadioButton>
                            <RadioButton onClick={() => setLocation('백양관')} selected={location === '백양관'}>백양관</RadioButton>
                        </SpaceAround>
                        <SpaceAround height="50px">
                            <RadioButton onClick={() => setLocation('학생회관')} selected={location === '학생회관'}>학생회관</RadioButton>
                            <RadioButton onClick={() => setLocation('신촌역')} selected={location === '신촌역'}>신촌역</RadioButton>
                        </SpaceAround>
                        <Title>근처 접속 중 친구</Title>
                    </White>
                    {onlineFriends.map((friend) => (
                        <Box on key={friend.user_id} name={friend.name} user_id={[user_id, friend.user_id]} type={friend.type} chatroom_id={friend.chatroom_id}>
                            {friend.status_message}
                        </Box>
                    ))}
                    <Title>근처 미접속 친구</Title>
                    {offlineFriends.map((friend) => (
                        <Box off key={friend.user_id} name={friend.name} user_id={[user_id, friend.user_id]} type={friend.type} chatroom_id={friend.chatroom_id}>
                            {friend.status_message}
                        </Box>
                    ))}
                    <Space></Space>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar around id={user_id}>
            </NaviBar>
        </>
    );
}

export default AroundPage;

export const White = styled.div`
    width:100%;
    max-width:800px;
    
    height:100%;
    background-color:#ffffff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`
