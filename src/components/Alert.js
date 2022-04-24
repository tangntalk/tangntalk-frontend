import React from "react";
import { useRecoilState, useRecoilValue } from 'recoil';

import { isModal, modalComment, modalFunction } from '../recoil/atom';

import styled from "styled-components";
import colors from "../util/colors";
import {InputSpace, Space} from "../styles/style";



import Button from "./BlueButton";


function Alert(props) {
    const [modal, setModal] = useRecoilState(isModal);
    const modalCommentAtm=useRecoilValue(modalComment);
    const modalFunctionAtm=useRecoilValue(modalFunction);


    const onFirstClick = () => {
        setModal(false);
    };

    return (
        <>
        {modal&&
            <>
            <ContentWrapper>
            <Content>
                <Space></Space>
                <InputSpace>
                <div>
                    
                </div>
                <XButton onClick={()=>setModal(false)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#2E3A59"/>
                    </svg>
                </XButton>
                </InputSpace>
                <TextSpace>
                    {modalCommentAtm}
                </TextSpace>
                <InputSpace {...props}>
                    <Button onClick={onFirstClick} width={'100%'}>확인</Button>
                </InputSpace>
            </Content>
            </ContentWrapper>
            <Background></Background>
            </>
            }
        </>
    );
}
export default Alert;

const Background = styled.div`
    opacity: 0.5;
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
    height:100vh;
    z-index:30;
    background-color:${colors.BLACK};
`
const ContentWrapper = styled.div`
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