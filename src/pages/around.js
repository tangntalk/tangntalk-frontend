import React from "react";

import Header from "../components/Hearder";
import Container from "../components/Container";
import NaviBar from "../components/NaviBar";

function aroundPage(props) {
    return (
        <>
                <Header search title="내 주변">
                </Header>
                <Container>
                </Container>
                <NaviBar around>
                </NaviBar>
        </>
    );
}

export default aroundPage;