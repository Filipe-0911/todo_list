import styled from "styled-components";
import Tarefas from "../Tarefas";
import { Tarefa } from "../../types/Tarefa";

const ContainerTarefa = styled.div`
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    min-height: 6em;
`
const TituloTarefaEstilizado = styled.h5`
    margin: 0;
    text-align: center;
    font-size: 24px;
`
interface ContainerTarefasProps {
    titulo: string;
    tarefas: Array<Tarefa>;
    concluirTarefa?: (id: number) => void;

}

export default function ContainerTarefas ({ titulo, tarefas, concluirTarefa }: ContainerTarefasProps): JSX.Element {
    return (
        <ContainerTarefa>
            <TituloTarefaEstilizado>{titulo}</TituloTarefaEstilizado>
            <Tarefas tarefas={tarefas} concluirTarefa={concluirTarefa}/>
        </ContainerTarefa>
    );
}
