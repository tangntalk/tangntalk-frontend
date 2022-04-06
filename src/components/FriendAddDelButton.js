import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';

import styled from "styled-components";
import colors from "../util/colors"

import * as api from "../util/api";
function FriendAddDelButton(props) {

    const [isFriend, setIsFriend] = useState(false);

    useEffect(() => {
        api.friendCheck(props.account_id, props.friend_id)
        .then(response => {
            setIsFriend(response.data.friend);
        })
        .catch(error => {  
            if (error.request) {
                alert('서버에서 응답이 오지 않습니다.');
            }
            else{
                alert('변경 중 문제가 생겼습니다.');
            }
        });
    },[]);

    const addFriend = () => {
        api.friendAdd(props.account_id, props.friend_id)
            .then((response) => {
                if(!response.data.success) {
                    alert('변경 중 문제가 생겼습니다.');
                } else {
                    setIsFriend(true);           
                }
            }).catch(error => {  
                if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else{
                    alert('변경 중 문제가 생겼습니다.');
                }
            });
    };

    const deleteFriend = () => {
        api.friendDelete(props.account_id, props.friend_id)
            .then((response) => {
                if(!response.data.success) {
                    alert('변경 중 문제가 생겼습니다.');
                } else {
                    setIsFriend(false);  
                }   
            }).catch(error => {
                if (error.request) {
                    alert('서버에서 응답이 오지 않습니다.');
                }
                else{
                    alert('변경 중 문제가 생겼습니다.');
                }
            });
    }

    var style = {
        whenFriend:{
            color:colors.WHITE, 
            backgroundColor:colors.MAIN
        },
        whenNotFriend:{

        }
    }
    return (
        <div>
            {isFriend===false &&
                <Button style={style.whenFriend} onClick={addFriend}>
                    친구 추가 
                </Button>
            }
            {isFriend===true &&
                <Button fill={colors.LIGHT} onClick={deleteFriend}>
                    친구 삭제
                </Button>
            }
        </div>
    );
}

export default withRouter(FriendAddDelButton);

const Button = styled.button`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width :    -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.maxwidth || "530px"};
    height: ${props => props.height || "30px"};
    border: none;
    border-radius: 5px;

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