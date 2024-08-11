import { useContext, useState } from 'react';
import Botao from './componentes/Botao';
import Cabecalho from './componentes/Cabecalho';
import { Input } from './componentes/Input';
import { MainEstilizada } from "./componentes/Main";
import { ContainerEstilizado } from "./componentes/Container";
import ContainerTarefas from './componentes/ContainerTarefas';
import { SectionAppEstilizada } from './componentes/SectionApp';
import { TarefasContext } from './contexts';

export default function App() {
  const [form, setForm] = useState<string>('');
  const { tarefas, addTarefa, concluirTarefa } = useContext(TarefasContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(e.target.value)
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

