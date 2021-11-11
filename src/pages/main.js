import React, { state, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import Title from "../components/Title";
import { ContainerSpace, ContainerContentG, Space } from "../styles/style";

import * as api from "../util/api";

function MainPage(props) {
    const { user_id } = useParams();
    const [myInfo, setMyInfo] = useState(null);
    const [isloading, setLoading] = useState(2);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const [offlineFriends, setOfflineFriends] = useState([]);

    useEffect(() => {
        api.user(user_id)
        .then(response => {
            setMyInfo(response.data.user);
            if(response.data.success) setLoading((isloading)=>(
                isloading-1
            ));
            else alert('요청한 사용자가 존재하지 않습니다');
        })
        .catch(error => {
            if (error.request) {
                alert('서버에서 응답이 오지 않습니다.');
            }
            else{
                alert('내 정보 조회 중 문제가 생겼습니다.')
            }

        })
    }, []);

    
    useEffect(() => {
        api.friendList(user_id)
          .then(response =>{
            console.log(response);
            setOfflineFriends(response.data.offline);
            setOnlineFriends(response.data.online);
            if(response.data.success){
                setLoading((isloading)=>(
                    isloading-1
                ));
            } 
            else alert('요청한 사용자가 존재하지 않습니다');
        })
        .catch(error => {
            if (error.request) {
                alert('서버에서 응답이 오지 않습니다.');
            }
            else{
                alert('친구 정보 조회 중 문제가 생겼습니다.')
            }
            
        })
    }, []);
    
    onlineFriends.sort(function(a, b) { 
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    offlineFriends.sort(function(a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

    if(isloading>0){
        return(
            <>
            <Header search title="친구 목록" id={user_id}>
            </Header>
            </>
        );
    }

    return (
        <>
            <Header search title="친구 목록" id={user_id}>
            </Header>
            <ContainerSpace>
                <ContainerContentG>
                    <Title>내 정보</Title>
                    <Box me={myInfo.location_name} name={myInfo.name} children={myInfo.status_message}></Box>
                    <Title>접속한 친구</Title>
                    {onlineFriends.map((friend) => (
                        <Box on key={friend.user_id} name={friend.name} user_id={[user_id, friend.user_id]} type={friend.type}>
                            {friend.status_message}
                        </Box>
                    ))}
                    <Title>미접속 친구</Title>
                    {offlineFriends.map((friend) => (
                        <Box off key={friend.user_id} name={friend.name} type={friend.type}>
                            {friend.status_message}
                        </Box>
                    ))}
                    <Box add name="박효정">친구 추가 해주세요</Box>
                    <Space></Space>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar user id={user_id}>
            </NaviBar>
        </>
    );
}

export default MainPage;