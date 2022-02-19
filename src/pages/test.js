import React, { useState } from "react";

import Header from "../components/Header";
import LocationBox from "../components/LocationBox";
import NaviBar from "../components/NaviBar";

import Wrapper from "../components/container/Wrapper";
import Content from "../components/container/Content";

import Box from "../components/Box";

import { ContainerSpace2, ContainerContent } from "../styles/style";

function TestPage(props) {
    const [myInfo, setMyInfo] = useState(null);
    const handleLocationChange = (location) => {
        setMyInfo({...myInfo, location_name: location});
        console.log("changing");
    }

    const nowDate=new Date();
    const rendezvousDate=new Date("2021-10-13 22:22:20");
    console.log(rendezvousDate);
    console.log(nowDate);
    console.log(rendezvousDate>nowDate);
    

    return (
        <>
            <Header title="연세톡 회원가입">
            </Header>
            <Wrapper navi>
                <Content gray>
                        <Box on key={"1234"} name={"1234"} user_id={"1234"} type={"1234"} chatroom_id={"1234"}>
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