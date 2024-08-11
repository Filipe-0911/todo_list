import styled from "styled-components";

export const ContainerEstilizado = styled.section`
    display: flex;
    gap: 1em;

    @media (max-width:562px) {
        flex-direction: column;
    }
`;