import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";

function RadioButton(props) {
    return (
        <Space onClick={props.onClick}>
            <Round>
                {props.selected &&
                <SelectRound></SelectRound>
                }
            </Round>
            <Text>
                {props.children}
            </Text>
        </Space>
    );
}
export default withRouter(RadioButton);

const Space = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
`

const Round = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    box-sizing: border-box;
    border:1px solid #948EA5;
    display:flex;
    align-items: center;
    justify-content: center;  

`
const SelectRound = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color:#1949D8;
`

const Text = styled.div`
    font-size:1em;
    margin-left:10px;
`