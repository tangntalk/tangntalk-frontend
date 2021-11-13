import { withRouter } from 'react-router-dom';

import styled from "styled-components";

import UserIcon from "./icon/User"
import AroundIcon from "./icon/Around"
import ChattingIcon from "./icon/Chatting"

function NaviBar(props) {
    return (
        <NaviSpace>
            <NaviContent>
                {props.user?<UserIcon selected id={props.id} ></UserIcon>:<UserIcon id={props.id}></UserIcon>}
                {props.around?<AroundIcon selected id={props.id}></AroundIcon>:<AroundIcon id={props.id}></AroundIcon>}
                {props.chat?<ChattingIcon selected id={props.id}></ChattingIcon>:<ChattingIcon id={props.id}></ChattingIcon>}
            </NaviContent>
        </NaviSpace>
    );
}

export default withRouter(NaviBar);

export const NaviSpace = styled.div`
    z-index:10;
    
    width:100%;
    height:100px;
    box-sizing: border-box;

    position:fixed;
    bottom:0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color:white;

    border-top:1px solid #ECEBED;
`

export const NaviContent = styled.div`
    width:100%;
    max-width:800px;
    height:100px;
    box-sizing: border-box;
    padding:30px;

    display: flex;
    align-items: center;
    justify-content:space-around;

    background-color:#ffffff;

    @media only screen and (max-width: 768px) {
        width:100%;
        padding:10px;
    }
`
export const Wrapper = styled.div`
    padding:0 10px;
    display: flex;
    align-items: center;
`