import styled from "styled-components";

export const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
        margin-bottom: 1em;
        width: 100%;
    }

    @media (max-width: 562px) {
        li {
            margin-bottom: 0;
        }
    }
`;