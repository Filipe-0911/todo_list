import styled from "styled-components";

export const Input = styled.input`
    font-size: 18px;
    background-color: var(--bg-input);
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;

    @media (min-width: 562px) {
        padding: 0;
        width: 100%;
    }
`