import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

function Title(props) {
    return (
        <TitleBox>
            <TitleContent onClick={props.onClick}>
                {props.children}
            </TitleContent>
        </TitleBox>
    );
}
export default withRouter(Title);

export const TitleBox = styled.div`
    width:100%;

    padding:30px 10px 10px 10px;

    background-color:#ffffff;

    display:flex;
    align-items:center;
    justify-content:center;
`
export const TitleContent=styled.div`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width :    -moz-${props => props.width || "calc(80% + 30px)"};
    max-width: 530px;
    max-height: 50px;
    word-break:keep-all;
    font-size:1.2em;
    font-weight:bold;
`