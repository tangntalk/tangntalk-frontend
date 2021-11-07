import React from "react";
import { withRouter } from 'react-router-dom';


import styled from "styled-components";
import BackIcon from "./icon/Back";
import SearchIcon from "./icon/Search";

function Header(props) {
    return (
        <HeaderSpace>
            <HeaderContent>
                <Wrapper>
                    {props.back&&(props.function?<BackIcon function={props.function}></BackIcon>:<BackIcon></BackIcon>)}
                    <Title>
                        {props.title}
                    </Title>
                </Wrapper>
                <Wrapper>
                    {props.search&&<SearchIcon></SearchIcon>}   
                </Wrapper>
            </HeaderContent>
        </HeaderSpace>
        // 헤더 왜 자꾸 오류나지
    );
}

export default withRouter(Header);

export const HeaderSpace = styled.div`
    width:100%;
    box-sizing: border-box;

    position:fixed;
    top:0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#ffffff;

    border-bottom:1px solid #ECEBED;
`

export const HeaderContent = styled.div`
    width:100%;
    max-width:800px;
    height:50px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content:space-between;

    @media only screen and (max-width: 768px) {
        width:100%;
    }
`
export const Wrapper = styled.div`
    padding:0 10px;
    display: flex;
    align-items: center;
`

export const Title = styled.div`
    word-break:keep-all;
    font-size:1.5em;
    font-weight:bold;
    overflow:hidden;
    margin-left:10px;
`