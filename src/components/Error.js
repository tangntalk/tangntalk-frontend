import React from "react";

import styled from "styled-components";
import colors from "../util/colors";
import Header from "./Header";
import NaviBar from "./NaviBar";
import Title from "./Title";
import Wrapper from "./container/Wrapper";
import Content from "./container/Content";

function ErrorPage(props) {
    return (
        <>
            <Header back title="에러">
            </Header>
            <Wrapper navi>
                <Content gray>
                    <Title>에러</Title>
                </Content>
            </Wrapper>
            <NaviBar around>
            </NaviBar>
        </>
    );
}

export default ErrorPage;

export const White = styled.div`
    width:100%;
    max-width:800px;
    
    height:100%;
    background-color:${colors.WHITE};

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`
