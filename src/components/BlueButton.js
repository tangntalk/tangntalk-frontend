import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import colors from "../util/colors"

function BlueButton(props) {
    return (
        <Button {...props} onClick={props.onClick}>
            {props.children}
        </Button>
    );
}
export default withRouter(BlueButton);

const Button = styled.button`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width :    -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.maxwidth || "530px"};
    height: ${props => props.height || "50px"};
    border: none;
    border-radius: 5px;

    background-color: ${colors.MAIN};
    color: ${colors.WHITE};

    font-weight: bold;
    font-size:${props => props.size || "1em"};

    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }

    &:active {
        opacity: 0.6;
    }
`