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

export const ContainerSpace = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:50px 0 100px 0;

    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    
    background-color:#ffffff;
`
export const ContainerSpace2 = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding:50px 0 0 0;

    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    background-color:#ffffff;
`
export const ContainerContent = styled.div`
    width:100%;
    max-width:800px;
    max-height:calc(100vh - 50px);
    box-sizing: border-box;
    padding:0 10px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    word-break:keep-all;

    overflow:scroll;
    overflow-x:hidden;
`
export const ContainerContentG = styled.div`
    width:100%;
    max-width:800px;
    max-height:calc(100vh - 50px);
    box-sizing: border-box;
    padding:0 10px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    word-break:keep-all;

    background-color:#ECEBED;

    overflow:scroll;
    overflow-x:hidden;

    gap:10px;
`

export const Space = styled.div`
    width:100%;
    height:10px;
`

export const Gray = styled.div`
    width:100%;
    height:100%;
    background-color:#ECEBED;
`

export const Line = styled.div`
    width: 85%;
    width: calc(80% + 30px);
    margin:20px 0;

    border-bottom:1px solid #ECEBED;

    max-width:530px;
`
export const InputBox = styled.div`
    width: 85%;
    width: calc(80% + 30px);
    max-width:530px;

    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const InputLink = styled.div`
    width: 85%;
    width: calc(80% + 30px);
    max-width:530px;

    margin:4px 0 0 0;
    height:15px;

    font-size:0.8em;

    color:#E45959;
`

export const ButtonLink = styled.div`
    width: 85%;
    width: calc(80% + 30px);
    max-width:530px;
    margin:10px 0 0 0;

    display:flex;
    align-items: center;
    justify-content:center;

    font-size:0.8em;
    font-weight:bold;
    
    color:#948EA5;

    cursor:pointer;

    &:hover {
        text-decoration: underline;
    }
`