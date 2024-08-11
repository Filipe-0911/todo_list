import { Tarefa } from "../../../types/Tarefa";

export const ADICIONAR_TAREFA = "ADICIONAR_TAREFA";
export const CONCLUIR_TAREFA = "CONCLUIR_TAREFA";

type ActionType = {
    type: typeof ADICIONAR_TAREFA | typeof CONCLUIR_TAREFA;
    payload: {tarefa?: Tarefa, id?: number};
}

export function reducer(state: Array<Tarefa>, action: ActionType): Array<Tarefa> {
    switch (action.type) {
        case ADICIONAR_TAREFA:
            if (action.payload.tarefa)
                return [...state, action.payload.tarefa];
        case CONCLUIR_TAREFA:
            return state.map(tarefa => tarefa.id === action.payload.id ? { ...tarefa, concluida: true } : tarefa);
        default:
            return state;
    }
}
