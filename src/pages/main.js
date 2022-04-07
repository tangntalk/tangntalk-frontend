import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import Title from "../components/Title";
import Wrapper from "../components/container/Wrapper";
import Content from "../components/container/Content";
import { Space } from "../styles/style";

import * as api from "../util/api";

function MainPage(props) {
    const { accountId } = useParams();
    const [myInfo, setMyInfo] = useState(null);
    const [isloading, setLoading] = useState(2);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const [offlineFriends, setOfflineFriends] = useState([]);

    
    const getMyInfo = () => {
        api.user(accountId)
            .then(response => {
                const {data} = response.data;
                setMyInfo(data);
                if (response.data.success) setLoading((isloading) => (isloading - 1));
                else alert('요청한 사용자가 존재하지 않습니다');
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { alert('내 정보 조회 중 문제가 생겼습니다.') }
            })
    }
    const getFriendList = () => {
        api.friendList(accountId)
            .then(response => {
                const {data} = response.data
                setOfflineFriends(data.offline);
                setOnlineFriends(data.online);
                if (response.data.success) { setLoading((isloading) => (isloading - 1)); }
                else alert('요청한 사용자가 존재하지 않습니다');
            })
            .catch(error => {
                if (error.request) { alert('서버에서 응답이 오지 않습니다.'); }
                else { alert('친구 정보 조회 중 문제가 생겼습니다.') }

            })
    }

    useEffect(getMyInfo, [accountId]);
    useEffect(getFriendList, [accountId]);

    onlineFriends.sort((a, b) => { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
    offlineFriends.sort((a, b) => { return a.name > b.name ? -1 : a.name < b.name ? 1 : 0; });

    if (isloading > 0) {
        return (
            <>
                <Header search title="친구 목록" id={accountId}></Header>
                <Wrapper navi>
                        <Content gray>
                        </Content>
                    </Wrapper>
                <NaviBar user id={accountId}>
                </NaviBar>
            </>
        );
    }

    return (
        <>
            <Header search title="친구 목록" id={accountId}>
            </Header>
            <Wrapper navi>
                <Content gray>
                    <Title>내 정보</Title>
                    <Box me userLocation={myInfo.locationName} name={myInfo.name} accountId={accountId} children={myInfo.statusMessage}></Box>
                    <Title>접속한 친구</Title>
                    {onlineFriends.map((friend) => (
                        <Box on delete userLocation={friend.userLocation} friendId={friend.accountId} key={friend.accountId} name={friend.name} accountId={[accountId, friend.accountId]} type={friend.type}>
                            {friend.statusMessage}
                        </Box>
                    ))}
                    <Title>미접속 친구</Title>
                    {offlineFriends.map((friend) => (
                        <Box off delete userLocation={friend.userLocation} friendId={friend.accountId} key={friend.accountId} name={friend.name} accountId={[accountId, friend.accountId]} type={friend.type}>
                            {friend.statusMessage}
                        </Box>
                    ))}
                    <Space></Space>
                </Content>
            </Wrapper>
            <NaviBar user id={accountId}>
            </NaviBar>
        </>
    );
}

export default MainPage;
