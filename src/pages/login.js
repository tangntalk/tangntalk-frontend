import React, { useState } from "react";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import { ContainerSpace2, ContainerContent, Space, ButtonLink} from "../styles/style";

import { Cookies } from "react-cookie";

import * as api from "../util/api";


function LoginPage(props) {
    const goRegister = () => props.history.push('/register');
    const goUser = (user_id) => props.history.push(`/users/${user_id}`);

    const cookies= new Cookies();

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
                console.log(response.data.jwt);
                cookies.set("accessToken", response.data.jwt, {path:'/'});                
                goUser(id);
            })
            .catch(error => {
                if (error.response) {
                    // 요청이 이루어졌으나 서버가 2xx의 범위를 벗어나는 상태 코드
                    if (error.response.status === 401) {
                        alert('잘못된 형식입니다');
                    } else if (error.response && error.response.status === 409) {
                        alert('이미 가입된 이메일이거나 별명입니다');
                    } else {
                        alert('알 수 없는 에러가 발생했습니다.');
                    }
                }
                else if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else {
                    alert('로그인 요청에 문제가 발생했습니다.');
                }
            });
    }
    return (
        <>
            <Header title="연세톡 로그인">
            </Header>
            <ContainerSpace2>
                <ContainerContent>
                    <Title>ID</Title>
                    <BoxInput placeholder="아이디" name="id" value={id} onInput={onChange}></BoxInput>
                    <Title>Password</Title>
                    <BoxInput placeholder="비밀번호" name="password" value={password} onInput={onChange} type="password"></BoxInput>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton onClick={detectInput}>로그인</BlueButton>
                    <ButtonLink onClick={goRegister}>회원가입하기</ButtonLink>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default LoginPage;