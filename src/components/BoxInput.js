import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

function BoxInput(props) {
    return (
        <Input type="text" {...props}/>
    );
}
export default withRouter(BoxInput);

export const Input = styled.input`
    height: 50px;
    width : ${props => props.width || "80%"};
    max-width:${props => props.maxwidth || "500px"};
    padding: 0 15px;
    border: 1px solid #948EA5;
    border-radius: 5px;
    font-size:15px;
    &:focus {
        outline: none;
        border-color: #1949D8;
    }
`