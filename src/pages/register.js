import React from "react";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import { ContainerSpace2, ContainerContent, Space, InputLink, ButtonLink, InputBox } from "../styles/style";

function RegisterPage(props) {
    const goLogin = () => props.history.push('/');
    return (
        <>
            <Header title="연세톡 회원가입">
            </Header>
            <ContainerSpace2>
                <ContainerContent>
                    <Title>ID</Title>
                        <BoxInput placeholder="아이디"></BoxInput>
                    <InputLink>아이디를 입력해주세요</InputLink>
                    <Title>Password</Title>
                    <BoxInput placeholder="비밀번호"></BoxInput>
                    <InputLink></InputLink>
                    <Space></Space>
                    <BoxInput placeholder="비밀번호 확인"></BoxInput>
                    <InputLink></InputLink>

                    <Title>Member</Title>
                    <BoxInput placeholder="별명"></BoxInput>
                    <InputLink>양식에 맞지 않는 별명입니다</InputLink>

                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton>회원가입</BlueButton>
                    <ButtonLink onClick={goLogin}>로그인하기</ButtonLink>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default RegisterPage;