import Botao from "../Botao";
import { Tarefa } from "../../types/Tarefa";
import { ListaEstilizada } from "../ListaTarefas";
import styled from "styled-components";

export interface TarefasProps {
    tarefas: Array<Tarefa>;
    concluirTarefa?: (id: number) => void;
}

interface LiEstilizadaProps {
    $concluida: boolean;
}

const LiEstilizada = styled.li<LiEstilizadaProps>`
    display: flex;
    justify-content: ${props => props.$concluida ? "center" : "space-between"};
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
`

export default function Tarefas({ tarefas, concluirTarefa }: TarefasProps) {
    return (
        <ListaEstilizada>
            {
                tarefas.map((tarefa) => (
                    tarefa &&
                    <LiEstilizada key={tarefa.id} $concluida={tarefa.concluida}>
                        {tarefa.descricao}
                        {
                            concluirTarefa &&
                            <Botao onClick={() => concluirTarefa(tarefa.id)}>
                                Concluir tarefa
                            </Botao>
                        }
                    </LiEstilizada>
                ))
            }
        </ListaEstilizada>

    );
}