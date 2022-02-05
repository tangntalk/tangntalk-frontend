import React, { useState } from "react";
import { withRouter } from 'react-router-dom';
import * as api from "../util/api";

import styled from "styled-components";
import BlueButton from "../components/BlueButton";
import { Space } from "../styles/style";
import colors from "../util/colors"


function LocationBox(props) {

    const [isActive, setIsActive] = useState(false);
    const [currentLocation,  setCurrentLocation] = useState(props.userLocation)
    const onClick = () => setIsActive(!isActive);

    const setInitLocation = (idx) => {
        setCurrentLocation(props.Options[idx]);
        setIsActive(false);
    }
    const postLocation = () => {
        api.userLocation(props.user_id, currentLocation)
        .then(response => {
            props.handleLocationChange(currentLocation);
            if(response.data.success)
                alert('사용자의 위치가 성공적으로 바뀌었습니다')
        })
        .catch(error => {
            if (error.request) {alert('서버에서 응답이 오지 않습니다.');}
            else{alert('내 정보 조회 중 문제가 생겼습니다.')}

        })
    }

    return ( 
        <Dropbox>
            <BlankButton onClick={onClick}>
                <TextSpace>
                    {currentLocation}
                </TextSpace>
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" style={{marginLeft: "auto"}} xmlns="http://www.w3.org/2000/svg">
                    <rect width="49" height="48"  fill="none"/>
                    <path d="M  15,15 25,35 35,15 z" stroke-width="1" stroke="black" fill="black" rx="5" ry="5"/>
                </svg>
            </BlankButton>
            { isActive === true && props.Options?
                <MenuNav>
                    <MenuHolder>
                        {props.Options.map((option, index) =>
                            <MenuLi key={index} onClick={() => setInitLocation(index)}>{option}</MenuLi>
                        )}
                    </MenuHolder>
                </MenuNav>
                :
                <></>
            }
            <Space></Space>
            <Space></Space>
            <BlueButton onClick={postLocation}>변경하기</BlueButton>
        </Dropbox>
    );
}
export default withRouter(LocationBox);

export const Dropbox = styled.div`
    width: ${props => props.width || "calc(100% + 30px)"};
    width : -webkit-${props => props.width || "calc(100% + 30px)"};
    width : -moz-${props => props.width || "calc(100% + 30px)"};
    max-width:${props => props.maxwidth || "800px"};
    border: none;

    
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

`
export const BlankButton = styled.button`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width : -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.maxwidth || "530px"};
    border: none;
    border-radius:5px;
    font-weight: bold;
    font-size:${props => props.size || "1em"};

    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    &:hover {
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    }

    &:active {
        opacity: 0.6;
    }
`
export const MenuNav = styled.nav`

    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 10px
`
export const TextSpace = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    position: absolute;             
    
`
export const MenuLi = styled.li`

    height: ${props => props.height || "50px"};
    border: none;
    font-weight: bold;
    font-size:${props => props.size || "1em"};
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1
    box-sizing: border-box;
    cursor: pointer;
    border-bottom: 1px solid ${colors.LIGHT};
`
export const MenuHolder = styled.ul`
    width: ${props => props.width || "calc(100%)"};
    width : -webkit-${props => props.width || "calc(100%)"};
    width :    -moz-${props => props.width || "calc(100%)"};
    max-width:${props => props.maxwidth || "530px"};
    
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    list-style: none;
    
    background-color: ${colors.WHITE};
    border: 1px solid ${colors.LIGHT};

    padding: 0;
    margin: 0;
    position: absolute;  
`
