import React from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import colors from "../../util/colors";

function Content(props) {
    return (
        <>
            {props.gray ?
                <ContainerContentG>
                    {props.children}
                </ContainerContentG>
                :
                <ContainerContent>
                    {props.children}
                </ContainerContent>}
        </>
    );
}
export default withRouter(Content);

export const ContainerContent = styled.div`
    width:100%;
    max-width:800px;
    min-height:${props => props.minHeight || "calc(100vh - 50px)"};
    box-sizing: border-box;
    padding:0 10px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    overflow-x:hidden;

    word-break:keep-all;
`
export const ContainerContentG = styled.div`
    width:100%;
    max-width:800px;
    min-height:${props => props.minHeight || "calc(100vh - 150px)"};

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    word-break:keep-all;

    background-color:${colors.LIGHT};

    overflow-x:hidden;

    gap:10px;
`