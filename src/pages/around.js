import React from "react";

import Header from "../components/Hearder";
import NaviBar from "../components/NaviBar";
import { ContainerSpace, ContainerContent } from "../styles/style";

function aroundPage(props) {
    return (
        <>
            <Header search title="내 주변">
            </Header>
            <ContainerSpace>
                < ContainerContent>
                    
                </ContainerContent>
            </ContainerSpace>
            <NaviBar around>
            </NaviBar>
        </>
    );
}

export default aroundPage;