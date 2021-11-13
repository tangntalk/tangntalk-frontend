import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import RadioButton from "../components/RadioButton";
import Title from "../components/Title";
import Text from "../components/Text";
import { ContainerSpace2, ContainerContent, Space, InputLink, SpaceAround, Line} from "../styles/style";

import * as api from "../util/api";

function SettingPage(props) {
    const [userType, setUserType] = useState('GENERAL');

    const logout = () => {
        api.logout()
            .then(() => {
                alert('로그아웃 되었습니다');
            })
            .catch(error => {
                alert('로그아웃에 실패했습니다');
            });
    }
    return (
        <>
            <Header back title="내 정보 수정">
            </Header>
            <ContainerSpace2>
                < ContainerContent>
                    <Space></Space>
                    <Title>상태 메세지</Title>
                    <BoxInput placeholder="상태 메세지"></BoxInput>
                    <InputLink>공백 포함 30자 이하여야 합니다</InputLink>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton>변경하기</BlueButton>

                    <Line></Line>

                    <Title>위치</Title>
                    <SpaceAround>
                        <RadioButton onClick={() => setUserType('GENERAL')} selected={userType === 'GENERAL'}>학생회관</RadioButton>
                        <RadioButton onClick={() => setUserType('STUDENT')} selected={userType === 'STUDENT'}>신촌역</RadioButton>
                    </SpaceAround>
                    <SpaceAround height="100px">
                        <RadioButton onClick={() => setUserType('CORPORATION')} selected={userType === 'CORPORATION'}>공학관</RadioButton>
                        <RadioButton onClick={() => setUserType('INSTRUCTOR')} selected={userType === 'INSTRUCTOR'}>백양관</RadioButton>
                    </SpaceAround>

                    <BlueButton>변경하기</BlueButton>

                    <Line></Line>

                    <Text onClick={logout}>로그아웃</Text>

                    <Line></Line>

                    <Text>회원 탈퇴</Text>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default SettingPage;