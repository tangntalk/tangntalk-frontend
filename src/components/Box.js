import { useState } from "react";
import { withRouter, useParams } from 'react-router-dom';

import styled from "styled-components";
import colors from "../util/colors"

import * as api from "../util/api";

function Box(props) {
    const { username } = useParams();
    const [add, setAdd] = useState(props.add);
    const [del, setDel] = useState(props.delete);

    const goChatting = () =>{
        
        props.history.push({
            pathname: `/chatting/${props.username[0]}/${props.username[1]}`,
            state: {opponentName: props.name,
                    chatroomId: props.chatroomId}
        });}
    
    const goSetting = () =>{props.history.push(`/setting/${props.username}`);}
    const addFriend = () => {
        api.friendAdd(props.friendId)
            .then((response) => {
                if(!response.data.success) {
                    alert('변경 중 문제가 생겼습니다.');
                } else {
                    setAdd(false);
                    setDel(true);            
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
        api.friendDelete(props.friendId)
            .then((response) => {
                if(!response.data.success) {
                    alert('변경 중 문제가 생겼습니다.');
                } else {
                    setAdd(true);
                    setDel(false);     
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

    return (
        <BoxContainer>
            <Left>
                <TextSpace>
                    {props.on &&
                        <Button onClick={goChatting}>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="49" height="48" rx="4" fill={colors.MAIN} />
                                <path d="M16 33V17C16 15.8954 16.8954 15 18 15H32C33.1046 15 34 15.8954 34 17V27C34 28.1046 33.1046 29 32 29H22C21.5671 28.9992 21.1458 29.1396 20.8 29.4L16 33ZM18 17V29L20.134 27.4C20.4796 27.1393 20.9011 26.9988 21.334 27H32V17H18Z" fill="white" />
                            </svg>
                        </Button>}
                    {props.off &&
                        <Button onClick={goChatting}>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="49" height="48" rx="4" fill={colors.LIGHT} />
                                <path d="M16 33V17C16 15.8954 16.8954 15 18 15H32C33.1046 15 34 15.8954 34 17V27C34 28.1046 33.1046 29 32 29H22C21.5671 28.9992 21.1458 29.1396 20.8 29.4L16 33ZM18 17V29L20.134 27.4C20.4796 27.1393 20.9011 26.9988 21.334 27H32V17H18Z" fill={colors.DARK} />
                            </svg>
                        </Button>
                    }
                </TextSpace>
                <TextSpace>
                    <UserTextSpace>
                        <Name>
                            {props.name}
                        </Name>
                        {(props.type) ? <UserType> ({props.type}) </UserType>: null }
                    </UserTextSpace>
                    <Status>
                        {props.children}
                    </Status>
                </TextSpace>
            </Left>

            <Right>
                {del &&
                    <Button onClick={deleteFriend}>
                        <div
                            style={{'height':'2.5em', 'width': '5em', 'display': 'flex', 'justify-content': 'center', 'align-items': 'center',
                                'font-size': '0.6em', 'font-weight': 'bold', 'background-color': colors.LIGHT, 'border-radius': '0.3em'
                            }}
                        >친구 삭제</div>
                    </Button>
                }
                {props.me &&
                    <>
                        {props.profile !==true ?
                            <Button onClick={goSetting}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.31322 14H5.68705C5.34804 14 5.05472 13.7711 4.98217 13.4498L4.68853 12.131C4.29681 11.9645 3.92538 11.7562 3.58107 11.5101L2.25573 11.9196C1.93251 12.0196 1.58114 11.8876 1.4116 11.6025L0.095635 9.3968C-0.0720441 9.11156 -0.0142753 8.75174 0.234879 8.5295L1.26298 7.6195C1.21623 7.20728 1.21623 6.79132 1.26298 6.3791L0.234879 5.4712C-0.0146423 5.24886 -0.0724341 4.8886 0.095635 4.6032L1.40872 2.3961C1.57825 2.11099 1.92962 1.979 2.25284 2.079L3.57819 2.4885C3.75427 2.36191 3.93758 2.24506 4.12723 2.1385C4.30928 2.03889 4.49665 1.94869 4.68853 1.8683L4.9829 0.5509C5.05509 0.229578 5.3481 0.000346075 5.68705 0H8.31322C8.65217 0.000346075 8.94518 0.229578 9.01737 0.5509L9.31462 1.869C9.5172 1.95546 9.71449 2.05316 9.90551 2.1616C10.0839 2.26154 10.2564 2.37115 10.4221 2.4899L11.7482 2.0804C12.0712 1.98077 12.4221 2.11271 12.5916 2.3975L13.9046 4.6046C14.0723 4.88984 14.0145 5.24966 13.7654 5.4719L12.7373 6.3819C12.784 6.79412 12.784 7.21008 12.7373 7.6223L13.7654 8.5323C14.0145 8.75454 14.0723 9.11436 13.9046 9.3996L12.5916 11.6067C12.4221 11.8915 12.0712 12.0234 11.7482 11.9238L10.4221 11.5143C10.2543 11.6342 10.0799 11.7452 9.89974 11.8468C9.71058 11.9531 9.51549 12.0492 9.31534 12.1345L9.01737 13.4498C8.94488 13.7708 8.65196 13.9997 8.31322 14ZM6.99725 4.2C5.40341 4.2 4.11136 5.4536 4.11136 7C4.11136 8.5464 5.40341 9.8 6.99725 9.8C8.59108 9.8 9.88314 8.5464 9.88314 7C9.88314 5.4536 8.59108 4.2 6.99725 4.2Z" fill={colors.DARK} />
                                </svg>
                                &ensp;Settings
                            </Button>
                            :
                            <div></div>
                        }
                    </>
                }
                {add &&
                    <TextSpace>
                        <Button onClick={addFriend}>
                            <div
                            style={{'height':'2.5em', 'width': '5em', 'display': 'flex', 'justify-content': 'center', 'align-items': 'center',
                                'font-size': '0.6em', 'font-weight': 'bold', 'background-color': colors.MAIN, 'border-radius': '0.3em', 'color': 'white'
                            }}
                            >친구 추가</div>
                        </Button>
                    </TextSpace>
                }
                {props.userLocation &&
                    <Button>
                        <Round>
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill={colors.MAIN} />
                                </svg>
                        </Round>
                        <Round>
                            {props.userLocation}
                        </Round>
                    </Button>
                }
            </Right>

        </BoxContainer>
    );
}

export default withRouter(Box);

export const BoxContainer = styled.div`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width : -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.maxwidth || "530px"};
    height: 80px;
    padding: 10px;
    border: 1px solid ${colors.LIGHT};
    box-sizing: border-box;
    border-radius:5px;

    display: flex;
    justify-content: space-between;

    background-color:${colors.WHITE};
`

export const Button = styled.div`
    cursor:pointer; 
    display: flex;
    align-items: center;   
    &:active {
        opacity: 0.6;
    }
`

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`
export const Right = styled.div`
    display: flex;
    align-items: end;
    flex-direction:column;
    justify-content:space-between;
`
export const TextSpace = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    padding-left:10px;
`
export const UserTextSpace = styled.div`
    display: flex;
    flex-direction:row;
    align-items: baseline;
`
export const Name = styled.div`
    font-size:1.2em;
    font-weight:bold;

    display: -webkit-box;
    line-height: 1.5;
    height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 1;
`
export const Status = styled.div`
    font-size:0.8em;
    color:${colors.DARK};

    display: -webkit-box;
    line-height: 1.5;
    height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 1;
`
export const UserType = styled.div`
    font-size:0.8em;
    color:${colors.DARK};
    padding-left: 5px;
    display: -webkit-box;
    line-height: 1.5;
    height: 1.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    -webkit-line-clamp: 1;
`
export const Round = styled.div`
    margin-right:5px;
    font-size:0.8em;
    font-weight:bold;
`
