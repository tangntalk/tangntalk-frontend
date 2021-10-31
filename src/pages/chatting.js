import React from "react";

import Header from "../components/Hearder";
import Container from "../components/Container";

function chattingPage(props) {
    const goChatList=()=>props.history.push('/chat');
    return (
        <>
            <Header back title="박효정" function={goChatList}>
            </Header>
            <Container>
            </Container>
        </>
    );
}

export default chattingPage;