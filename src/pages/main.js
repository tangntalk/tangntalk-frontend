import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import NaviBar from "../components/NaviBar";
import Box from "../components/Box";
import Title from "../components/Title";
import { ContainerSpace, ContainerContentG, Space } from "../styles/style";

function MainPage(props) {
    const { user_id } = useParams();

    return (
        <>
            <Header search title="친구 목록" id={user_id}>
            </Header>
            <ContainerSpace>
                <ContainerContentG>
                    <Title>내 정보</Title>
                    <Box me name="박효정">집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어</Box>
                    <Title>접속한 친구</Title>
                    <Box on name="박효정">집인데 집가고 싶어</Box>
                    <Box on name="박효정">집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어 집인데 집가고 싶어</Box>
                    <Title>미접속 친구</Title>
                    <Box off name="박효정">집인데 집가고 싶어</Box>
                    <Box off name="박효정">집인데 집가고 싶어</Box>
                    <Box add name="박효정">친구 추가 해주세요</Box>
                    <Space></Space>
                </ContainerContentG>
            </ContainerSpace>
            <NaviBar user id={user_id}>
            </NaviBar>
        </>
    );
}

export default MainPage;