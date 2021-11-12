import React, { useState } from "react";

import Header from "../components/Header";
import RadioButton from "../components/RadioButton";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG } from "../styles/style";

function ChattingPage(props) {
    const goChatList = () => props.history.push('/chat');
    const [userType, setUserType] = useState('GENERAL');
    return (
        <>
            <Header back title="박효정" function={goChatList}>
            </Header>
            <ContainerSpace paddingBottom="200px">
                < ContainerContentG minHeight="calc(100vh - 250px)">
                </ContainerContentG>
            </ContainerSpace>
            <NaviSpace>
                <NaviContent>
                    <RadioButton onClick={() => setUserType('GENERAL')} selected={userType === 'GENERAL'}>일반</RadioButton>
                    <RadioButton onClick={() => setUserType('30')} selected={userType === '30'}>30분</RadioButton>
                    <RadioButton onClick={() => setUserType('60')} selected={userType === '60'}>60분</RadioButton>
                    <RadioButton onClick={() => setUserType('custom')} selected={userType === 'custom'}>
                        <input></input>
                    </RadioButton>
                </NaviContent>
            </NaviSpace>
        </>
    );
}

export default ChattingPage;

export const NaviSpace = styled.div`
    width:100%;
    height:200px;
    box-sizing: border-box;

    position:fixed;
    bottom:0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:white;

    border-top:1px solid #ECEBED;
`

export const NaviContent = styled.div`
    width:100%;
    max-width:800px;
    height:100px;
    box-sizing: border-box;
    padding:30px;

    display: flex;
    align-items: center;
    justify-content:space-around;

    background-color:#ffffff;

    @media only screen and (max-width: 768px) {
        width:100%;
        padding:10px;
    }
`
export const Wrapper = styled.div`
    padding:0 10px;
    display: flex;
    align-items: center;
`