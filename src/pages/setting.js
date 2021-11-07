import React from "react";

import Header from "../components/Hearder";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import Text from "../components/Text";
import { ContainerSpace2, ContainerContent, Space, InputLink, ButtonLink, Line} from "../styles/style";

function SettingPage(props) {
    return (
        <>
            <Header back title="내 정보 수정">
            </Header>
            <ContainerSpace2>
                < ContainerContent>
                    <Space></Space>
                    <Title title="상태 메세지"></Title>
                    <BoxInput placeholder="상태 메세지"></BoxInput>
                    <InputLink>공백 포함 30자 이하여야 합니다</InputLink>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton>변경하기</BlueButton>

                    <Line></Line>

                    <Title title="위치"></Title>
                    <BlueButton>변경하기</BlueButton>

                    <Line></Line>

                    <Text text="로그아웃"></Text>

                    <Line></Line>
                    
                    <Text text="회원 탈퇴"></Text>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default SettingPage;