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
    height:100vh;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color:#ECEBED;
`
export const ContainerContent = styled.div`
    width:100%;
    max-width:800px;
    height:100vh;
    box-sizing: border-box;

    word-break:keep-all;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#ECEBED;

    padding:20px;
`