import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import Text from "../components/Text";
import Box from "../components/Box";
import LocationBox from "../components/LocationBox";

import { ContainerSpace2, ContainerContent, Space, InputLink, Line} from "../styles/style";

import * as api from "../util/api";


function SettingPage(props) {


    const { user_id } = useParams();
    const [myInfo, setMyInfo] = useState(null);
    const [isLoading, setLoading] = useState(1);
    const [newStatus, setNewStatus] = useState("");

    const getMyInfo = () => {
        api.user(user_id)
        .then(response => {
            setMyInfo(response.data.user);
            if(response.data.success && isLoading > 0) setLoading((isloading)=>(isLoading-1));
            else alert('요청한 사용자가 존재하지 않습니다');})
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('내 정보 조회 중 문제가 생겼습니다.')}})
    }

    const handleChange = (event) => {
        setNewStatus(event.target.value);
    }

    const handleLocationChange = (location) => {
        setMyInfo({...myInfo, location_name: location});
        console.log("changing");

    }

    const postStatus = () =>{
        api.userStatus(user_id, newStatus)
        .then(response => {
            setMyInfo({...myInfo, status_message: newStatus});
            if(response.data.success){alert('상태 메시지가 성공적으로 바뀌었습니다.')}
        })
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('상태 메시지 업데이트 중 문제가 생겼습니다.')}
        })
    }

    useEffect(getMyInfo, [user_id, isLoading]);

    const logout = () =>{
        api.logout(user_id)
        .then(() => {
            alert('로그아웃 되었습니다.');
            props.history.push('/login');
        })
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('로그아웃 중 문제가 생겼습니다.')}
        })
    }

    const userDelete = () =>{
        api.userDelete(user_id)
        .then(() => {
            alert('회원 탈퇴 처리되었습니다.');//비동기 처리
            props.history.push('/login');
        })
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('로그아웃 중 문제가 생겼습니다.')}
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
            <ContainerSpace2>
                <ContainerContent>
                    <Space></Space>
                    <Title> 내 정보</Title>
                    <Box me user_location={myInfo.location_name} name={myInfo.name} user_id={user_id} children={myInfo.status_message} profile></Box>
                    <Line></Line>

                    <Title> 상태 메시지</Title>
                    <BoxInput maxLength="20" placeholder="상태 메세지" onChange={handleChange} ></BoxInput>
                    <InputLink>공백 포함 20자 이하여야 합니다</InputLink>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton onClick={postStatus}>변경하기</BlueButton>
                    <Line></Line>
                    <Title >위치</Title>
                    <LocationBox userLocation={myInfo.location_name} user_id={user_id} Options={["공학관", "신촌역", "학생회관", "백양관"]} handleLocationChange={handleLocationChange}></LocationBox>
                    <Line></Line>
                    <Text children="로그아웃" onClick={logout}></Text>
                    <Line></Line>
                    <Text children="회원 탈퇴" onClick={userDelete}></Text>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default SettingPage;