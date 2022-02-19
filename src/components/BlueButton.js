import React from "react";
import styled from "styled-components";
import colors from "../util/colors";


function BlueButton(props) {
    return (
        <Button onClick={props.onClick} {...props} href={props.href}>
            {props.children}
        </Button>
    );
}
export default BlueButton;




const Button = styled.a`
    height: ${props => props.height || "50px"};
    width: ${props => props.width || "80%"};
    max-width:${props => props.maxWidth || "500px"};

    padding: 0 15px;

    display:flex;
    justify-content:center;
    align-items:center;
    
    border: none;
    border-radius: 7px;

    background-color: ${props => props.backgroundColor || colors.MAIN};
    color: ${props => props.color || colors.WHITE};

    font-weight: bold;
    font-size:${props => props.size || "1em"};
    text-decoration:none;

    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    }

    &:active {
        opacity: 0.6;
    }
`