import { createContext } from "react";
import { Tarefa } from "../types/Tarefa";
import { useTarefa } from "../hooks/useTarefa";
import { ADICIONAR_TAREFA, CONCLUIR_TAREFA } from "../hooks/useTarefa/reducer";

interface TarefasProvidesValues {
    tarefas: Array<Tarefa>;
    addTarefa: (descricao: string) => void;
    concluirTarefa: (id: number) => void;
}
export const TarefasContext = createContext<TarefasProvidesValues>({
    tarefas: [],
    addTarefa: () => { },
    concluirTarefa: () => { }
});

TarefasContext.displayName = "Tarefas";

interface TarefasProvidesProps {
    children: React.ReactNode;
}


export function TarefasProvider({ children }: TarefasProvidesProps): JSX.Element {
    const { dispatcher, tarefas } = useTarefa();

    function addTarefa(descricao: string) {
        if (descricao.length > 0) {
            const tarefa: Tarefa = { id: (tarefas.length), descricao: descricao, concluida: false };
            dispatcher({ type: ADICIONAR_TAREFA, payload: { tarefa } });
        }
        return;
    }

    function concluirTarefa(id: number) {
        console.log(id)
        dispatcher({ type: CONCLUIR_TAREFA, payload: { id }})
    }

    return (
        <TarefasContext.Provider value={{ tarefas, addTarefa, concluirTarefa }}>
            {children}
        </TarefasContext.Provider>
    );
}