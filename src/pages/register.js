import React, { useState } from "react";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import RadioButton from "../components/RadioButton";
import { ContainerSpace2, ContainerContent, Space, InputLink, ButtonLink, SpaceAround } from "../styles/style";

import * as api from "../util/api";
import * as reg from "../util/regex";

function RegisterPage(props) {
    const goLogin = () => props.history.push('/');

    const [inputs, setInputs] = useState({
        id: '',
        password: '',
        rePassword: '',
        name: '',
    });
    const { id, password, rePassword, name } = inputs;

    const [type, setType] = useState('일반');

    const [alerts, setAlerts] = useState({
        idAlert: '',
        passwordAlert: '',
        rePasswordAlert: '',
        nameAlert: '',
    });
    const { idAlert, passwordAlert, rePasswordAlert, nameAlert } = alerts;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const inputCheck = (e) => {
        const { value, name } = e.target;
        switch (name) {
            case 'id':
                reg.checkId(value) ? setAlerts({ ...alerts, idAlert: '' }) : setAlerts({ ...alerts, idAlert: '특수문자와 공백 없이 8자~20자 사이여야 합니다' });
                break;
            case 'password':
                reg.checkPassword(value) ? setAlerts({ ...alerts, passwordAlert: '' }) : setAlerts({ ...alerts, passwordAlert: '공백 없이 8자 이상이여야 합니다' });
                break;
            case 'rePassword':
                (password === value) ? setAlerts({ ...alerts, rePasswordAlert: '' }) : setAlerts({ ...alerts, rePasswordAlert: '비밀번호 재입력이 일치하지 않습니다' });
                break;
            case 'name':
                reg.checkName(value) ? setAlerts({ ...alerts, nameAlert: '' }) : setAlerts({ ...alerts, nameAlert: '공백 문자는 입력이 불가능합니다' });
                break;
            default:
        }
    }

    const submitCheck = (e) => {
        if (reg.isNull(id)) {
            alert('아이디를 입력해주세요');
            return;
        }
        if (!reg.checkId(id)) {
            alert('아이디는 특수문자와 공백 없이 8자~20자 사이여야 합니다');
            return;
        }

        if (reg.isNull(password)) {
            alert('비밀번호를 입력해주세요');
            return;
        }
        if (!reg.checkPassword(password)) {
            alert('비밀번호는 공백 없이 8자 이상이여야 합니다');
            return;
        }

        if (reg.isNull(rePassword)) {
            alert('비밀번호를 재입력해주세요');
            return;
        }
        if (password !== rePassword) {
            alert('비밀번호 재입력이 일치하지 않습니다');
            return;
        }

        if (reg.isNull(name)) {
            alert('별명을 입력해주세요');
            return;
        }
        if (reg.isWhitespace(name)) {
            alert('별명은 공백을 포함할 수 없습니다');
            return;
        }
        register();
    }


    const register = () => {
        api.register(id, password, name, type)
            .then(() => {
                goLogin();
            })
            .catch(error => {
                if (error.response) {
                    if (error.response && error.response.status === 401) {
                        alert('가입에 실패했습니다');
                    } else {
                        alert('알 수 없는 에러가 발생했습니다.');
                    }
                }
                else if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else {
                    alert('가입 요청에 문제가 발생했습니다.');
                }
            });
    }

    return (
        <>
            <Header title="연세톡 회원가입">
            </Header>
            <ContainerSpace2>
                <ContainerContent>
                    <Title>ID</Title>
                    <BoxInput placeholder="아이디" name="id" value={id} onInput={onChange} onChange={inputCheck} onBlur={inputCheck}></BoxInput>
                    <InputLink>{idAlert}</InputLink>
                    <Title>Password</Title>
                    <BoxInput placeholder="비밀번호" name="password" type="password" value={password} onInput={onChange} onChange={inputCheck} onBlur={inputCheck}></BoxInput>
                    <InputLink>{passwordAlert}</InputLink>
                    <Space></Space>
                    <BoxInput placeholder="비밀번호 확인" name="rePassword" type="password" value={rePassword} onInput={onChange} onChange={inputCheck} onBlur={inputCheck}></BoxInput>
                    <InputLink>{rePasswordAlert}</InputLink>
                    <Title>Member</Title>
                    <BoxInput placeholder="별명" name="name" value={name} onInput={onChange} onChange={inputCheck} onBlur={inputCheck}></BoxInput>
                    <InputLink>{nameAlert}</InputLink>

                    <SpaceAround height="80px">
                        <RadioButton onClick={() => setType('일반')} selected={type === '일반'}>일반</RadioButton>
                        <RadioButton onClick={() => setType('학생')} selected={type === '학생'}>학생</RadioButton>
                    </SpaceAround>
                    <SpaceAround height="50px">
                        <RadioButton onClick={() => setType('기업')} selected={type === '기업'}>기업</RadioButton>
                        <RadioButton onClick={() => setType('강사')} selected={type === '강사'}>강사</RadioButton>
                    </SpaceAround>

                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <BlueButton onClick={submitCheck}>회원가입</BlueButton>
                    <ButtonLink onClick={goLogin}>로그인하기</ButtonLink>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default RegisterPage;