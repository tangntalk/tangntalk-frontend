import React, { useState } from "react";

import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import RadioButton from "../components/RadioButton";
import { ContainerSpace2, ContainerContent, Space, InputLink, ButtonLink, SpaceAround} from "../styles/style";

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
    const [type, setType] = useState('GENERAL');

    // const [alerts, setAlerts] = useState({
    //     idAlert: '',
    //     passwordAlert: '',
    //     rePasswordAlert: '',
    //     nameAlert: '',
    // });
    // const { idAlert, passwordAlert, rePasswordAlert, nameAlert } = inputs;

    // const [idIsInputChecked, setIsInputChecked] = useState(true);

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // const inputCheck = (e) => {
    //     const { value, name } = e.target;
    //     switch (name) {
    //         case 'id':
    //             console.log('개빡쳐 진짜');
    //             reg.checkEmail(value) ? setAlerts({ ...alerts, idAlert: '' }) : setAlerts({ ...alerts, idAlert: '이메일 형식이 아닙니다' });
    //             console.log(idAlert);
    //             break;
    //         case 'password':
    //             reg.checkPassword(value) ? setAlerts({ ...alerts, passwordAlert: '' }) : setAlerts({ ...alerts, passwordAlert: '8자 이상 20자 이하 영문+숫자 조합입니다' });
    //             break;
    //         case 'rePassword':
    //             (password === value) ? setAlerts({ ...alerts, rePasswordAlert: '' }) : setAlerts({ ...alerts, rePasswordAlert: '비밀번호가 일치하지 않습니다' });
    //             break;
    //         default:
                
    //     }
    // }
    const register = () => {
        api.register(id, password, name, type)
            .then(() => {
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
                        <BoxInput placeholder="아이디" name="id" value={id} onInput={onChange}></BoxInput>
                        <InputLink></InputLink>
                    <Title>Password</Title>
                        <BoxInput placeholder="비밀번호" name="password" value={password} onInput={onChange} type="password"></BoxInput>
                        <InputLink></InputLink>
                        <Space></Space>
                        <BoxInput placeholder="비밀번호 확인" name="rePassword" value={rePassword} onInput={onChange}type="password"></BoxInput>
                        <InputLink></InputLink>

                    <Title>Member</Title>
                        <BoxInput placeholder="별명" name="name" value={name} onInput={onChange}></BoxInput>
                        <InputLink></InputLink>

                        <SpaceAround height="80px">
                            <RadioButton onClick={() => setType('GENERAL')} selected={type === 'GENERAL'}>일반</RadioButton>
                            <RadioButton onClick={() => setType('STUDENT')} selected={type === 'STUDENT'}>학생</RadioButton>
                        </SpaceAround>
                        <SpaceAround height="50px">
                            <RadioButton onClick={() => setType('CORPORATION')} selected={type === 'CORPORATION'}>기업</RadioButton>
                            <RadioButton onClick={() => setType('INSTRUCTOR')} selected={type === 'INSTRUCTOR'}>강사</RadioButton>
                        </SpaceAround>

                        <Space></Space>
                        <Space></Space>
                        <Space></Space>
                    <BlueButton onClick={register}>회원가입</BlueButton>
                    <ButtonLink onClick={goLogin}>로그인하기</ButtonLink>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default RegisterPage;