import { useState } from "react";
import { withRouter, useParams } from 'react-router-dom';

import styled from "styled-components";

import * as api from "../util/api";

function Box(props) {
    const { user_id } = useParams();
    const [add, setAdd] = useState(props.add);

    const goChatting = () =>{props.history.push(`/chatting/${props.user_id[0]}/${props.user_id[1]}`);}
    const goSetting = () =>{props.history.push(`/setting/${props.user_id}`);}
    const addFriend = () => {
        api.friendAdd(user_id, props.friend_id);
        setAdd(false);
    }
    const deleteFriend = () => {
        api.friendDelete(user_id, props.friend_id);
        setAdd(true);
    }

    return (
        <BoxContainer>
            <Left>
                <TextSpace>
                    {props.on &&
                        <Button onClick={goChatting}>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="49" height="48" rx="4" fill="#1949D8" />
                                <path d="M16 33V17C16 15.8954 16.8954 15 18 15H32C33.1046 15 34 15.8954 34 17V27C34 28.1046 33.1046 29 32 29H22C21.5671 28.9992 21.1458 29.1396 20.8 29.4L16 33ZM18 17V29L20.134 27.4C20.4796 27.1393 20.9011 26.9988 21.334 27H32V17H18Z" fill="white" />
                            </svg>
                        </Button>}
                    {props.off &&
                        <Button onClick={goChatting}>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="49" height="48" rx="4" fill="#ECEBED" />
                                <path d="M16 33V17C16 15.8954 16.8954 15 18 15H32C33.1046 15 34 15.8954 34 17V27C34 28.1046 33.1046 29 32 29H22C21.5671 28.9992 21.1458 29.1396 20.8 29.4L16 33ZM18 17V29L20.134 27.4C20.4796 27.1393 20.9011 26.9988 21.334 27H32V17H18Z" fill="#948EA5" />
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
                {(props.me!==true && add !== true) &&
                    <Button onClick={deleteFriend}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.59 0L5 3.59L1.41 0L0 1.41L3.59 5L0 8.59L1.41 10L5 6.41L8.59 10L10 8.59L6.41 5L10 1.41L8.59 0Z" fill="black" />
                        </svg>
                    </Button>
                }
                {props.me &&
                    <>
                        {props.profile !==true ?
                            <Button onClick={goSetting}>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.31322 14H5.68705C5.34804 14 5.05472 13.7711 4.98217 13.4498L4.68853 12.131C4.29681 11.9645 3.92538 11.7562 3.58107 11.5101L2.25573 11.9196C1.93251 12.0196 1.58114 11.8876 1.4116 11.6025L0.095635 9.3968C-0.0720441 9.11156 -0.0142753 8.75174 0.234879 8.5295L1.26298 7.6195C1.21623 7.20728 1.21623 6.79132 1.26298 6.3791L0.234879 5.4712C-0.0146423 5.24886 -0.0724341 4.8886 0.095635 4.6032L1.40872 2.3961C1.57825 2.11099 1.92962 1.979 2.25284 2.079L3.57819 2.4885C3.75427 2.36191 3.93758 2.24506 4.12723 2.1385C4.30928 2.03889 4.49665 1.94869 4.68853 1.8683L4.9829 0.5509C5.05509 0.229578 5.3481 0.000346075 5.68705 0H8.31322C8.65217 0.000346075 8.94518 0.229578 9.01737 0.5509L9.31462 1.869C9.5172 1.95546 9.71449 2.05316 9.90551 2.1616C10.0839 2.26154 10.2564 2.37115 10.4221 2.4899L11.7482 2.0804C12.0712 1.98077 12.4221 2.11271 12.5916 2.3975L13.9046 4.6046C14.0723 4.88984 14.0145 5.24966 13.7654 5.4719L12.7373 6.3819C12.784 6.79412 12.784 7.21008 12.7373 7.6223L13.7654 8.5323C14.0145 8.75454 14.0723 9.11436 13.9046 9.3996L12.5916 11.6067C12.4221 11.8915 12.0712 12.0234 11.7482 11.9238L10.4221 11.5143C10.2543 11.6342 10.0799 11.7452 9.89974 11.8468C9.71058 11.9531 9.51549 12.0492 9.31534 12.1345L9.01737 13.4498C8.94488 13.7708 8.65196 13.9997 8.31322 14ZM6.99725 4.2C5.40341 4.2 4.11136 5.4536 4.11136 7C4.11136 8.5464 5.40341 9.8 6.99725 9.8C8.59108 9.8 9.88314 8.5464 9.88314 7C9.88314 5.4536 8.59108 4.2 6.99725 4.2Z" fill="#948EA5" />
                                </svg>
                                &ensp;Settings
                            </Button>
                            :
                            <div></div>
                        }
                        <Button>
                            <Round>
                                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="3.5" cy="3.5" r="3.5" fill="#1949D8" />
                                </svg>
                            </Round>
                            <Round>
                                {props.user_location}
                            </Round>
                        </Button>
                    </>
                }
                {add &&
                    <Button onClick={addFriend}>
                        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="49" height="48" rx="4" fill="#1949D8" />
                            <path d="M25.25 21.25V28.75H22.75V21.25H15.25V18.75H22.75V11.25H25.25V18.75H32.75V21.25H25.25Z" fill="white" />
                            <path d="M13.272 33.485H12.075V39.551H13.272V33.485ZM11.553 37.625C10.203 37.256 9.6 36.329 9.6 35.42V35.375H11.265V34.439H9.6V33.53H8.412V34.439H6.738V35.375H8.412V35.42C8.412 36.392 7.818 37.364 6.468 37.76L7.026 38.687C7.989 38.408 8.655 37.805 9.024 37.049C9.411 37.742 10.059 38.291 11.004 38.552L11.553 37.625ZM8.943 40.685V39.02H7.755V41.63H13.479V40.685H8.943ZM22.1633 37.49H21.0743C21.2813 36.329 21.2813 35.483 21.2813 34.709V33.962H15.5303V34.916H20.1203C20.1203 35.627 20.1023 36.437 19.8953 37.49H14.6753V38.444H17.7713V41.774H18.9773V38.444H22.1633V37.49ZM25.7767 38.021C27.1987 37.85 28.1977 37.283 28.7287 36.536C29.2597 37.283 30.2587 37.85 31.6627 38.021L32.0857 37.085C30.3847 36.896 29.4847 36.077 29.3407 35.375H31.7977V34.43H29.3137V33.503H28.1257V34.43H25.6597V35.375H28.1077C27.9727 36.095 27.0907 36.896 25.3627 37.085L25.7767 38.021ZM32.4817 38.444H24.9937V39.407H28.1257V41.792H29.3137V39.407H32.4817V38.444ZM33.642 34.331V35.294H36.351C36.135 37.13 35.109 38.444 33.183 39.434L33.849 40.343C36.603 38.948 37.548 36.815 37.548 34.331H33.642ZM40.914 36.644H39.753V33.476H38.565V41.756H39.753V37.625H40.914V36.644Z" fill="white" />
                        </svg>
                    </Button>}
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
    border: 1px solid #ECEBED;
    box-sizing: border-box;
    border-radius:5px;

    display: flex;
    justify-content: space-between;

    background-color:#ffffff;
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
    color:#948EA5;

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
    color:#948EA5;
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
