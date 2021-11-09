import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG, WhiteSpace, Space } from "../styles/style";

function AroundPage(props) {
    const { user_id } = useParams();

    return (
        <>
            <Header search title="내 주변" id={user_id}>
            </Header>
            <ContainerSpace>
                <ContainerContentG>
                    <White>
                        <Title>내 정보</Title>
                        <BlueButton>공학관</BlueButton>
                        <Title>근처 접속 중 친구</Title>
                    </White>
                    <Box on name="효정">집인데 집가고 싶어</Box>
                    <Box on name="효정">집인데 집가고 싶어</Box>
                    <Title>근처 미접속 친구</Title>
                    <Box off name="효정">집인데 집가고 싶어</Box>
                    <Box off name="효정">집인데 집가고 싶어</Box>
                    <Space></Space>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar around id={user_id}>
            </NaviBar>
        </>
    );
}

export default AroundPage;

export const White = styled.div`
    width:100%;
    max-width:800px;
    
    height:100%;
    background-color:#ffffff;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`