import React from "react";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import BlueButton from "../components/BlueButton";
import Title from "../components/Title";
import styled from "styled-components";
import { ContainerSpace, ContainerContentG, ContainerContent, Space } from "../styles/style";

function AroundPage(props) {
    return (
        <>
            <Header search title="내 주변">
            </Header>
            <ContainerSpace>
                <ContainerContent>
                    <Title title="내 정보"></Title>
                    <BlueButton>공학관</BlueButton>
                </ContainerContent>
                <ContainerContentG>
                    <Title title="근처 접속 중 친구"></Title>
                    <Box on></Box>
                    <Box on></Box>
                    <Title title="근처 미접속 친구"></Title>
                    <Box off></Box>
                    <Box off></Box>
                    <Space></Space>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar around>
            </NaviBar>
        </>
    );
}

export default AroundPage;

export const White = styled.div`
    width:100%;
    height:100%;
    background-color:#ffffff;
`