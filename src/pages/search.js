import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import colors from "../util/colors"

import Header from "../components/Header";
import Box from "../components/Box";
import { Icon } from "../styles/style";

import Wrapper from "../components/container/Wrapper"
import Content from "../components/container/Content"

import * as api from "../util/api";

function SearchPage(props) {
    const { account_id } = useParams();
    const [friends, setFriends] = useState([]);
    const [query, setQuery] = useState('');

    const updateQuery = (e) => {
        setQuery(e.target.value);
    }

    const search = () => {
        api.friendSearch(account_id, query)
            .then((response) => {
                var accounts = response.data.user;
                var filtered_accounts = [];

                var i;

                for (i = 0; i < accounts.length; i++) {
                    if (accounts[i].account_id !== account_id) {
                        filtered_accounts.push(accounts[i]);
                    }
                }

                filtered_accounts.sort(function(a, b) {
                    if (a.name < b.name) {
                        return -1;
                    } else if (a.name > b.name) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                setFriends(filtered_accounts);
            })
            .catch(error => {
                if (error.response) {
                    alert('알 수 없는 에러가 발생했습니다.');
                }
                else if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else {
                    alert('요청에 문제가 발생했습니다.');
                }
            });
    };

    return (
        <>
            <Header back title="친구 검색하기">
            </Header>
            <SearchSpace>
                <SearchContent>
                    <Input type="text" placeholder="이름으로 친구 검색" value={query} onChange={e => updateQuery(e)}></Input>
                    <Icon onClick={search}>
                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1244 22.3258L12.7426 14.9426C9.45872 17.2773 4.93372 16.7062 2.33286 13.6289C-0.267992 10.5516 -0.0770181 5.99472 2.77219 3.14583C5.62065 0.2957 10.178 0.1039 13.2559 2.70462C16.3337 5.30534 16.9051 9.83078 14.5703 13.1149L21.9522 20.4981L20.1257 22.3245L20.1244 22.3258ZM8.25144 3.4584C5.80206 3.45785 3.68888 5.1772 3.19131 7.57552C2.69373 9.97383 3.94853 12.3919 6.19598 13.3658C8.44344 14.3397 11.0659 13.6017 12.4755 11.5986C13.8852 9.59548 13.6946 6.87786 12.0192 5.09108L12.8007 5.86608L11.9198 4.98775L11.9043 4.97225C10.9378 3.99985 9.62241 3.4547 8.25144 3.4584Z" fill="black" />
                        </svg>
                    </Icon>
                </SearchContent>
            </SearchSpace>
            <Margin></Margin>
            <Wrapper>
                <Content gray id="friend-search">
                    <div></div>
                    {friends.map((friend) => (
                        <Box add={!friend.is_friend} delete={friend.is_friend} name={friend.name} friend_id={friend.account_id} key={friend.account_id}>
                            {friend.status_message}
                        </Box>
                    ))}
                    <div></div>
                </Content>
            </Wrapper>

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

    background-color:${colors.WHITE};

    border-bottom:1px solid ${colors.LIGHT};
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
    background-color: ${colors.LIGHT};
    &:focus {
        outline: none;
    }
`
