import React from "react";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import Title from "../components/Title";
import { ContainerSpace, ContainerContentG, Space } from "../styles/style";

function MainPage(props) {

    return (
        <>
            <Header search title="친구 목록">
            </Header>
            <ContainerSpace>
                <ContainerContentG>
                    <Title title="내 정보"></Title>
                    <Box me></Box>
                    <Title title="접속한 친구"></Title>
                    <Box on></Box>
                    <Box on></Box>
                    <Title title="미접속 친구"></Title>
                    <Box off></Box>
                    <Box off></Box>
                    <Space></Space>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar user>
            </NaviBar>
        </>
    );
}

export default MainPage;