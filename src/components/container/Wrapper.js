import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import colors from "../../util/colors";

function Wrapper(props) {
    return (
        <>
            {props.navi ?
                <ContainerSpace>
                    {props.children}
                </ContainerSpace>
                :
                <ContainerSpace2>
                    {props.children}
                </ContainerSpace2>}
        </>
    );
}
export default withRouter(Wrapper);

export const ContainerSpace = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding-top:50px;
    padding-bottom:${props => props.paddingBottom || "100px"};

    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    
    background-color:${colors.WHITE};
`
export const ContainerSpace2 = styled.div`
    width:100%;
    height:100%;
    box-sizing: border-box;
    padding-top:50px;
    padding-bottom:${props => props.paddingBottom || "0px"};

    display: flex;
    align-items: center;
    flex-flow: column nowrap;

    background-color:${colors.WHITE};
`