import { useReducer } from "react";
import { reducer } from "./reducer";
import { Tarefa } from "../../types/Tarefa";


export function useTarefa() {
    const [tarefas, dispatcher] = useReducer(reducer, [] as Tarefa[]);

    return {
        tarefas, dispatcher
    }
}