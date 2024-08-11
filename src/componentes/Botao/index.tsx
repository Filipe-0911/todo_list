import { ReactElement } from "react";
import styled from "styled-components";

interface BotaoProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactElement | string | Array<string>;
}

const BotaoEstilizado = styled.button`
    background-color: #61dafb;
    color: black;
    border: none;
    padding: 20px 20px;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
`;


export default function Botao({ onClick, children }: BotaoProps): JSX.Element {
  return (
    <BotaoEstilizado onClick={onClick}>
        {children}
    </BotaoEstilizado>
  )
}
