import styled from "styled-components";

export const Icon = styled.div`
    cursor:pointer;
    margin:0 10px;
    text-align:center;
`     
export const NaviIcon = styled.div`
    cursor:pointer;
    margin:0 10px;
    text-align:center;
    fill:${props => props.selected ? "#000000" : "#948EA5"};
    color:${props => props.selected ? "#000000" : "#948EA5"};
`   

export const NaviText = styled.div`
    word-break:keep-all;
    font-size:0.8em;
    font-weight:bold;
    overflow:hidden;
`