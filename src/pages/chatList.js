import React from "react";

import Header from "../components/Header";
import { ContainerSpace, ContainerContent } from "../styles/style";
import NaviBar from "../components/NaviBar";

function ChatListPage(props) {
    return (
        <>
            <Header title="채팅 목록">
            </Header>
            <ContainerSpace>
                < ContainerContent>
                </ContainerContent>
            </ContainerSpace>
            <NaviBar chat>
            </NaviBar>
        </>
    );
}

export default ChatListPage;