import React from "react";

import Header from "../components/Hearder";
import { ContainerSpace2, ContainerContent } from "../styles/style";

function chattingPage(props) {
    const goChatList = () => props.history.push('/chat');
    return (
        <>
            <Header back title="박효정" function={goChatList}>
            </Header>
            <ContainerSpace2>
                < ContainerContent>
                </ContainerContent>
            </ContainerSpace2>
        </>
    );
}

export default chattingPage;