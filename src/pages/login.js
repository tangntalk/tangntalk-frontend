import React, { useState } from "react";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import OauthButton from "../components/OauthButton";
import Title from "../components/Title";
import Wrapper from "../components/container/Wrapper"
import Content from "../components/container/Content"
import {Space, ButtonLink} from "../styles/style";

import { Cookies } from "react-cookie";

import * as api from "../util/api";
import * as util from "../util/utility"


function LoginPage(props) {
    const goRegister = () => props.history.push('/register');
    const goUser = (username) => props.history.push(`/accounts/${username}`);

    const [inputs, setInputs] = useState({
        id: '',
        password: '',
    });
    const { id, password } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const detectInput = () => {
        if (id.length === 0) {
            alert('아이디를 입력하세요');
            return;
        }
        if (password.length === 0) {
            alert('패스워드를 입력하세요');
            return;
        }
        login();
    }

    const login = () => {
        api.login(id, password)
            .then((response) => {
                console.log(response.data.data);              
                goUser(id);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response || error.response.status === 401) {
                        alert('잘못된 형식입니다');
                    } else if (error.response || error.response.status === 500) {
                        alert('서버에서 응답이 오지 않습니다');
                    }
                }
                else {
                    alert('로그인 요청에 문제가 발생했습니다.');
                }
            });
    }

    return (
        <>
            <Header title="탕근톡 로그인">
            </Header>
            <Wrapper>
                <Content>
                    <Title>ID</Title>
                    <BoxInput placeholder="아이디" name="id" value={id} onInput={onChange} onKeyDown={(e)=>{util.OnEnterKeyDown(e, 'Enter', login)}}></BoxInput>
                    <Title>Password</Title>
                    <BoxInput placeholder="비밀번호" name="password" value={password} onInput={onChange} type="password" onKeyDown={(e)=>{util.OnEnterKeyDown(e, 'Enter', login)}}></BoxInput>
                    <Space loop={3}></Space>
                    <BlueButton onClick={detectInput}>로그인</BlueButton>
                    <ButtonLink onClick={goRegister}>회원가입하기</ButtonLink>
                    <Space loop={3}></Space>
                    <OauthButton google></OauthButton>
                    <Space loop={2}></Space>
                    <OauthButton kakao></OauthButton>
                </Content>
            </Wrapper>
        </>
    );
}

export default LoginPage;