import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

function Text(props) {
    return (
        <TextBox>
            <TextContent onClick={props.onClick}>
                {props.children}
            </TextContent>
        </TextBox>
    );
}
export default withRouter(Text);

export const TextBox = styled.div`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width :    -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.width || "530px"};

    display:flex;
    align-items:center;
`
export const TextContent=styled.div`
    word-break:keep-all;
    font-size:1em;
    cursor:pointer;
`