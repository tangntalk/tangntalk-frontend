import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

function Title(props) {
    return (
        <TitleBox>
            <TitleContent>
                {props.title}
            </TitleContent>
        </TitleBox>
    );
}
export default withRouter(Title);

export const TitleBox = styled.div`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width :    -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.width || "530px"};
    max-height: 50px;

    margin:10px;

    display:flex;
    align-items:center;
`
export const TitleContent=styled.div`
    word-break:keep-all;
    font-size:1.2em;
    font-weight:bold;
`