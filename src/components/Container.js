import { withRouter } from 'react-router-dom';

import styled from "styled-components";

function Container() {
    return (
        <ContainerSpace>
            < ContainerContent>
            </ContainerContent>
        </ContainerSpace>
    );
}

export default withRouter(Container);

export const ContainerSpace = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:50px 0 100px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color:#ECEBED;
`
export const ContainerContent = styled.div`
    width:100%;
    max-width:800px;
    min-height:100vh;
    box-sizing: border-box;
    padding:20px;

    word-break:keep-all;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:pink;
    border:10px solid red;
    overflow:scroll;
`