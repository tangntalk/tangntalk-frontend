import React, { useState } from "react";

import Header from "../components/Header";
import LocationBox from "../components/LocationBox";
import NaviBar from "../components/NaviBar";

import Wrapper from "../components/container/Wrapper";
import Content from "../components/container/Content";

import Box from "../components/Box";
import BlueButton from "../components/BlueButton";

import { ContainerSpace2, ContainerContent } from "../styles/style";

function TestPage(props) {
    const [myInfo, setMyInfo] = useState(null);
    const handleLocationChange = (location) => {
        setMyInfo({...myInfo, locationName: location});
    }

    const nowDate=new Date();
    const rendezvousDate=new Date("2021-10-13 22:22:20");

    const [rendezvous, setRendezvous] = useState({});
    const addRendezvous=()=>{
        setRendezvous(list=>({...list, "newname":true}));
    };
    const what="newname";

    const add=()=>{
    };
    

    return (
        <>
            <Header title="탕근톡 회원가입">
            </Header>
            <Wrapper navi>
                <Content gray>
                        <BlueButton onClick={addRendezvous}></BlueButton>
                        <BlueButton onClick={add}></BlueButton>
                        <Box on key={"1234"} name={"1234"} accountId={"1234"} type={"1234"} chatroomId={"1234"}>
                            {"1234"}
                        </Box>
                        <LocationBox Options={["공학관", "신촌역", "학생회관", "백양관"]} handleLocationChange={handleLocationChange}></LocationBox>
                </Content>
            </Wrapper>
            <NaviBar around>
            </NaviBar>
        </>
    );
}

export default TestPage;