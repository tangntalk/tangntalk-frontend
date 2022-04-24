import React from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import colors from "../util/colors";
import {InputSpace, Space, Line} from "../styles/style";

import Button from "./BlueButton";


function Alert(props) {
    const onFirstClick = () => {
        props.setOpen(false);
        if (props.firstButtonFunc) props.firstButtonFunc();
    };

    return (
        <>
        <ContentWrapper isOpen={props.isOpen} {...props}>
        <Content>
            <Space></Space>
            <InputSpace {...props}>
            <div>
                
            </div>
            <XButton onClick={()=>props.setOpen(false)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#2E3A59"/>
                </svg>
            </XButton>
            </InputSpace>
            <TextSpace>
                {props.children}
            </TextSpace>
            <InputSpace {...props}>
                <Button onClick={onFirstClick} width={'100%'}>확인</Button>
            </InputSpace>
        </Content>
        </ContentWrapper>
        <Background isOpen={props.isOpen} {...props}></Background>
        </>
    );
}
export default Alert;

const Background = styled.div`
    opacity: ${props => props.isOpen ? "0.5" : "0"};
    visibility: ${props => props.isOpen ? "visible" : "hidden"};

    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100vh;
    background-color:${colors.BLACK};
`
const ContentWrapper = styled.div`
    opacity: ${props => props.isOpen ? "1" : "0"};
    visibility: ${props => props.isOpen ? "visible" : "hidden"};

    position:fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    top: 0;
    left: 0;
    width:100%;
    height:100vh;
    z-index:40;
`
const Content = styled.div`
    display:flex;
    flex-flow: column nowrap;
    align-items: center;

    max-width:400px;
    width:80%;
    height:240px;
    background-color:white;
`
const TextSpace = styled.div`
    width: calc(80% + 30px);
    width : -webkit-calc(80% + 30px);
    width :    -moz-calc(80% + 30px);
    max-width:340px;
    width:80%;
    height:120px;
    margin-top:10px;
    
    display:flex;
    flex-flow:no-wrap;
`
const RowSpace = styled.div`
    width:20px;
    height:auto;
`

const XButton = styled.div`
    &:hover{
        cursor:pointer;
    }
`