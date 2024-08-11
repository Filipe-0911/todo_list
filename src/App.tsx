import { useState } from 'react';
import Botao from './componentes/Botao';
import Cabecalho from './componentes/Cabecalho';
import { Input } from './componentes/Input';
import { MainEstilizada } from "./componentes/Main";
import { ContainerEstilizado } from "./componentes/Container";
import { Tarefa } from './types/Tarefa';
import ContainerTarefas from './componentes/ContainerTarefas';
import { SectionAppEstilizada } from './componentes/SectionApp';

export default function App() {
  const [tarefas, setTarefas] = useState<Array<Tarefa>>([]);
  const [form, setForm] = useState<string>('');

  function addTarefa(descricao: string) {
    if (descricao.length > 0) {
      const tarefa: Tarefa = { id: (tarefas.length), descricao: descricao, concluida: false };
      setTarefas([...tarefas, tarefa])
    }
    return;
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(e.target.value)
  }
  function concluirTarefa(id: number) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    )
    )
  }

  return (
    <>
      <Cabecalho texto='Bem vindo' link="./logo.svg" alt='logo' />
      <MainEstilizada>
        <SectionAppEstilizada>
        <h1>Minha lista de tarefas</h1>
          <ContainerEstilizado>
            <Input type='text' onChange={handleChange} defaultValue={form} />
            <Botao onClick={() => addTarefa(form)}>
              Adicionar Tarefa
            </Botao>
          </ContainerEstilizado>
          <ContainerTarefas
            titulo='Tarefas pendentes'
            tarefas={tarefas.filter(tarefa => !tarefa.concluida)}
            concluirTarefa={concluirTarefa}
          />
          <ContainerTarefas
            titulo='Tarefas concluídas'
            tarefas={tarefas.filter(tarefa => tarefa.concluida)}
          />
        </SectionAppEstilizada>
      </MainEstilizada>
    </>
  )
}

