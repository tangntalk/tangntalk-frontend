import { withRouter } from 'react-router-dom';

import styled from "styled-components";

function ChatBox(props) {
    return (
        <OutBox>
            <BoxContainer>
                <Left>
                    {props.on &&
                        <Button>
                            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="49" height="48" rx="4" fill="#1949D8" />
                                <path d="M16 33V17C16 15.8954 16.8954 15 18 15H32C33.1046 15 34 15.8954 34 17V27C34 28.1046 33.1046 29 32 29H22C21.5671 28.9992 21.1458 29.1396 20.8 29.4L16 33ZM18 17V29L20.134 27.4C20.4796 27.1393 20.9011 26.9988 21.334 27H32V17H18Z" fill="white" />
                            </svg>
                        </Button>}
                    {props.off &&
                        <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="49" height="48" rx="4" fill="#ECEBED" />
                            <path d="M16 33V17C16 15.8954 16.8954 15 18 15H32C33.1046 15 34 15.8954 34 17V27C34 28.1046 33.1046 29 32 29H22C21.5671 28.9992 21.1458 29.1396 20.8 29.4L16 33ZM18 17V29L20.134 27.4C20.4796 27.1393 20.9011 26.9988 21.334 27H32V17H18Z" fill="#948EA5" />
                        </svg>
                    }
                    <Text>
                        {props.children}
                    </Text>
                </Left>
                <Right>
                    <Data>{props.date}</Data>
                    <Data>{props.time}</Data>
                    <Data>{props.to && 'to.'}{props.from && 'from.'}{props.oppenent}</Data>
                </Right>
            </BoxContainer>
        </OutBox>
    );
}

export default withRouter(ChatBox);
export const OutBox = styled.div`
    width:100%;
    height:80px;
    display: flex;
    justify-content: center;
    background-color:#ffffff;
`

export const BoxContainer = styled.div`
    width: ${props => props.width || "calc(80% + 30px)"};
    width : -webkit-${props => props.width || "calc(80% + 30px)"};
    width : -moz-${props => props.width || "calc(80% + 30px)"};
    max-width:${props => props.maxwidth || "530px"};
    padding:10px;

    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
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
    width:80%;
`
export const Right = styled.div`
    width:20%;
    display: flex;
    align-items: end;
    flex-direction:column;
    justify-content:space-between;
`

export const Text = styled.div`
    width:70%;
    margin-left:10px;
    display: -webkit-box;
    font-size: 1em;
    font-weight:bold;
    line-height: 1.5;
    height: 3em;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical; 
    word-break: keep-all;
    -webkit-line-clamp: 2;
`
export const Data = styled.div`
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
export const Round = styled.div`
    font-size:0.8em;
    font-weight:bold;
`