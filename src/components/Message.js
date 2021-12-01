import React from "react";
import { withRouter } from 'react-router-dom';

import styled from "styled-components";


function Message(props) {
    return (
            <Space {...props}>
                {props.receive&&
                <TextSpace {...props}>
                <Text {...props}>{props.date}</Text>
                <Text {...props}>{props.time}</Text>
                <Text {...props}>{props.readOrNot}</Text>
                </TextSpace>
                }

                <Chat {...props}>
                    <div>
                    {props.children}
                    </div>
                    {props.rendezvous&&
                        <RadeText>
                        {props.rendezvous}
                        </RadeText>
                    }
                </Chat>

                {props.send&&
                <TextSpace {...props}>
                <Text {...props}>{props.date}</Text>
                <Text {...props}>{props.time}</Text>
                <Text {...props}>{props.readOrNot}</Text>
                </TextSpace>
                }
            </Space>
    );
}
export default withRouter(Message);

export const Text= styled.div`
    font-size:0.6em;
    color:#948EA5;
    ${(props) =>
        props.send &&
        `
        margin-left:5px;
        `}
    ${(props) =>
        props.receive &&
        `
        margin-right:5px;
        `}
    
`
export const RadeText= styled.div`
    font-size:0.7em;
    width:100%;
    margin-top:5px;
    text-align:right;
`
export const TextSpace = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-items:${props=>props.send?"start":"end"};
    justify-content:end;
`
export const Space = styled.div`
    width:90%;
    display:flex;
    justify-content:${props=>props.send?"start":"end"};
`
export const Chat = styled.div`
    padding:15px 20px;
    position:relative;
    width:180px;
    min-height:20px;
    background-color:${props=>props.rendezvous?"#1949D8":"#ffffff"};
    color:${props=>props.rendezvous?"#ffffff":"#000000"};
    border:none;
    border-radius: 5px;

    :before {
    border-top:15px solid ${props=>props.rendezvous?"#1949D8":"#ffffff"};

    content:"";

    position:absolute;
    top:10px;

    ${(props) =>
        props.send &&
        `
        border-left: 15px solid transparent;
        border-right: 0px solid transparent;
        border-bottom: 0px solid transparent;
        left:-15px;
        `}
    ${(props) =>
        props.receive &&
        `
        border-left: 0px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 0px solid transparent;
        left:220px;
        `}
    `