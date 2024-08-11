import { ReactElement } from "react";

interface CabecalhoProps {
  texto: string;
}

export default function Cabecalho({ texto }: CabecalhoProps): ReactElement {
  return (
    <header>
        {texto}
    </header>
  )
}
