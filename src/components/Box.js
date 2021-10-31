import { withRouter } from 'react-router-dom';

import styled from "styled-components";

function Box(props) {
    return (
        <BoxContainer>

        </BoxContainer>
    );
}

export default withRouter(Box);

export const BoxContainer = styled.div`
    margin:10px;
    width:calc(100%-20px);
    height:70px;
    box-sizing: border-box;
    border-radius:5px;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color:#ffffff;
`