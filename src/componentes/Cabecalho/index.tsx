import { ReactElement } from "react";
import styles from "../Cabecalho/Cabecalho.module.css";
import styled from "styled-components";

interface CabecalhoProps {
  texto: string;
  link: string;
  alt: string;
}

const HeaderEstilizado = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #282c34;
  color: white;
  padding: 10px;
  gap: 1em;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  img {
    width: 32px;
    height: 32px;
  }
`

export default function Cabecalho({ texto, alt, link }: CabecalhoProps): ReactElement {
  return (
    <HeaderEstilizado>
        <img src={link} className={styles.appLogo} alt={alt} />
        {texto}
    </HeaderEstilizado>
  )
}
