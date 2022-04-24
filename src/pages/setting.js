import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { authorized, isModal, modalComment, modalFunction } from '../recoil/atom';

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import Text from "../components/Text";
import Box from "../components/Box";
import LocationBox from "../components/LocationBox";
import Wrapper from "../components/container/Wrapper"
import Content from "../components/container/Content"

import { Space, InputLink, Line } from "../styles/style";

import * as api from "../util/api";
import * as util from "../util/utility"

function SettingPage(props) {
    const setAuthorized=useSetRecoilState(authorized);

    const { username } = useParams();
    const [myInfo, setMyInfo] = useState(null);
    const [isLoading, setLoading] = useState(1);
    const [newStatus, setNewStatus] = useState("");

    const getMyInfo = () => {
        api.user()
        .then(response => {
            const {data} = response.data
            setMyInfo(data);
            if(response.data.success && isLoading > 0) setLoading((isloading)=>(isLoading-1));
            else if(isLoading!==0)alert('요청한 사용자가 존재하지 않습니다');})
        .catch(error => {
            if ((error.response && error.response.status === 401)||(error.response && error.response.status === 403)) {setAuthorized('unauthorized');}
            else if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('내 정보 조회 중 문제가 생겼습니다.')}})
    }

    const handleChange = (event) => {
        setNewStatus(event.target.value);
    }

    const handleLocationChange = (location) => {
        setMyInfo({...myInfo, locationName: location});

    }

    const postStatus = () =>{
        api.updateAccountStatus(newStatus)
        .then(response => {
            setMyInfo({...myInfo, statusMessage: newStatus});
            if(response.data.success){alert('상태 메시지가 성공적으로 바뀌었습니다.')}
        })
        .catch(error => {
            if (error.response || error.response.status === 401) {setAuthorized('unauthorized');}
            else if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('상태 메시지 업데이트 중 문제가 생겼습니다.')}
        })
    }

    useEffect(getMyInfo, [isLoading]);

    const setModal=useSetRecoilState(isModal);
    const setModalComment=useSetRecoilState(modalComment);
    const setModalFunction=useSetRecoilState(modalFunction);

    const logout = () =>{
        api.logout()
        .then(() => {
            setAuthorized('false');
            alert('로그아웃 되었습니다');
            setModalFunction(props.history.push('/'));
        })
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('로그아웃 중 문제가 생겼습니다.')}
        })
    }

    const userDelete = () =>{
        api.userDelete()
        .then(() => {
            setAuthorized('false');
            alert('회원 탈퇴 처리되었습니다.');//비동기 처리
            props.history.push('/login');
        })
        .catch(error => {
            if((error.response && error.response.status === 401)||(error.response && error.response.status === 403)){setAuthorized(false)}
            else if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('회원 탈퇴 중 문제가 생겼습니다.')}
        })
    }


    if(isLoading>0){
        return(
            <>
                <Header back title="내 정보 수정"></Header>
            </>
        );
    }

    
    return (
        <>
            <Header back title="내 정보 수정">
            </Header>
            <Wrapper>
                <Content>
                    <Space></Space>
                    <Title> 내 정보</Title>
                    <Box me userLocation={myInfo.locationName} name={myInfo.name} username={username} children={myInfo.statusMessage} profile></Box>
                    <Line></Line>
                    <Title> 상태 메시지</Title>
                    <BoxInput maxLength="20" placeholder="상태 메세지" onChange={handleChange} onKeyDown={(e)=>{util.OnEnterKeyDown(e, 'Enter', postStatus)}}></BoxInput>
                    <InputLink>공백 포함 20자 이하여야 합니다</InputLink>
                    <Space loop={2}></Space>
                    <BlueButton onClick={postStatus}>변경하기</BlueButton>
                    <Line></Line>
                    <Title >위치</Title>
                    <LocationBox userLocation={myInfo.locationName} username={username} Options={["공학관", "신촌역", "학생회관", "백양관"]} handleLocationChange={handleLocationChange}></LocationBox>
                    <Line></Line>
                    <Text children="로그아웃" onClick={logout}></Text>
                    <Line></Line>
                    <Text children="회원 탈퇴" onClick={userDelete}></Text>
                </Content>
            </Wrapper>
        </>
    );
}

export default SettingPage;