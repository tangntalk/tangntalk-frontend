import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Box from "../components/Box";
import SearchIcon from "../components/icon/Search";

import { ContainerSpace2, ContainerContentG } from "../styles/style";

function SearchPage(props) {
    return (
        <>
            <Header back title="친구 검색하기">
            </Header>
            <SearchSpace>
                <SearchContent>
                    <Input type="text" placeholder="이름으로 친구 검색"></Input>
                    <SearchIcon></SearchIcon>
                </SearchContent>
            </SearchSpace>
            <Margin></Margin>
            <ContainerSpace2>
                <ContainerContentG>
                    <div></div>
                    <Box name="이지영" add>아이고야</Box>
                    <Box name="이예림">집에 가자</Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <Box name="이예림">초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 초코하임 맛있다 </Box>
                    <div></div>
                </ContainerContentG>
            </ContainerSpace2>

        </>
    );
}

export default SearchPage;

export const Margin = styled.div`
    height:100px;
`

export const SearchSpace = styled.div`
    width:100%;
    box-sizing: border-box;

    position:fixed;
    margin-top:50px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:#ffffff;

    border-bottom:1px solid #ECEBED;
`

export const SearchContent = styled.div`
    width:100%;
    max-width:550px;
    padding:0 10px;
    height:100px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content:space-between;

    @media only screen and (max-width: 768px) {
        width:100%;
    }
`
export const Input = styled.input`
    height: 45px;
    width : 90%;
    max-width:500px;
    padding: 0 15px;
    margin:0 10px;
    border: none;
    border-radius: 5px;
    font-size:18px;
    background-color: #F2F4F8;
    &:focus {
        outline: none;
    }
`