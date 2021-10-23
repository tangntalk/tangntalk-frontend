import styled from "styled-components";

export const Container = styled.div`
    word-break:keep-all;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 50px 200px;
    box-sizing: border-box;
    gap:20px;

    @media only screen and (max-width: 768px) {
        padding: 50px 200px;
        gap:10px;
    }
`