import React from "react";

import Header from "../components/Hearder";
import { ContainerSpace, ContainerContent } from "../styles/style";
import NaviBar from "../components/NaviBar";

function mainPage(props) {

    return (
        <>
            <Header search title="친구 목록">
            </Header>
            <ContainerSpace>
                < ContainerContent>
                </ContainerContent>
            </ContainerSpace>
            <NaviBar user>
            </NaviBar>
        </>
    );
}

export default mainPage;