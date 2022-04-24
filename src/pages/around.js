import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { authorized } from '../recoil/atom';

import styled from "styled-components";
import colors from "../util/colors"
import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import RadioButton from "../components/RadioButton";
import Title from "../components/Title";
import Wrapper from "../components/container/Wrapper";
import Content from "../components/container/Content";

import { SpaceAround, Space } from "../styles/style";

import * as api from "../util/api";

function AroundPage(props) {
    const setAuthorized=useSetRecoilState(authorized);

    const { username } = useParams();
    const [onlineFriends, setOnlineFriends] = useState([]);
    const [offlineFriends, setOfflineFriends] = useState([]);
    const [refreshInterval] = useState(5000);
    const [location, setLocation] = useState('공학관');

    const getFriendNearby = () =>{
        api.friendNearby(location)
            .then(response => {

                const {data} = response.data;

                if (!response.data.success) {
                    alert('조회 중 문제가 생겼습니다.');
                }
                else {
                    setOfflineFriends(data.offline);
                    setOnlineFriends(data.online);
                }
            })
            .catch(error => {
                if ((error.response && error.response.status === 401)||(error.response && error.response.status === 403)){
                    setAuthorized(false);
                }
                else if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else {
                    alert('조회 중 문제가 생겼습니다.');
                }
        });
    }
    
    useEffect(getFriendNearby, [location]);

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
            <Header search title="내 주변" id={username}>
            </Header>
            <Wrapper navi>
                <Content gray>
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
                        <Title>접속 중인 사용자</Title>
                    </White>
                    {onlineFriends.map((friend) => (
                        <Box on key={friend.username} name={friend.name} username={[username, friend.username]} type={friend.type} chatroomId={friend.chatroomId}>
                            {friend.statusMessage}
                        </Box>
                    ))}
                    <Title>미접속인 사용자</Title>
                    {offlineFriends.map((friend) => (
                        <Box off key={friend.username} name={friend.name} username={[username, friend.username]} type={friend.type} chatroomId={friend.chatroomId}>
                            {friend.statusMessage}
                        </Box>
                    ))}
                    <Space></Space>
                </Content>
            </Wrapper>
            <NaviBar around>
            </NaviBar>
        </>
    );
}

export default AroundPage;

export const White = styled.div`
    width:100%;
    max-width:800px;
    
    height:100%;
    background-color:${colors.WHITE};

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`
