import { useState, createContext } from "react";
import { Tarefa } from "../types/Tarefa";

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
    const [tarefas, setTarefas] = useState<Array<Tarefa>>([]);

    function addTarefa(descricao: string) {
        if (descricao.length > 0) {
            const tarefa: Tarefa = { id: (tarefas.length), descricao: descricao, concluida: false };
            setTarefas([...tarefas, tarefa])
        }
        return;
    }

    function concluirTarefa(id: number) {
        setTarefas(tarefas.map(tarefa =>
            tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
        ))
    }

    return (
        <TarefasContext.Provider value={{ tarefas, addTarefa, concluirTarefa }}>
            {children}
        </TarefasContext.Provider>
    );
}