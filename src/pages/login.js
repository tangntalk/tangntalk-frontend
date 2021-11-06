import React from "react";

import Header from "../components/Hearder";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import { ContainerSpace2, ContainerContent, Space, InputLink, ButtonLink} from "../styles/style";

function loginPage(props) {
    const goRegister = () => props.history.push('/register');
    return (
        <>
            <Header title="연세톡 로그인">
            </Header>
            <ContainerSpace2>
                <ContainerContent>
                    <Space></Space>
                    <Title title="ID"></Title>
                    <BoxInput placeholder="아이디"></BoxInput>
                    <InputLink>아이디를 입력해주세요</InputLink>
                    <Space></Space>
                    <Title title="Password"></Title>
                    <BoxInput placeholder="비밀번호"></BoxInput>
                    <InputLink></InputLink>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton>로그인</BlueButton>
                    <ButtonLink onClick={goRegister}>회원가입하기</ButtonLink>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default loginPage;