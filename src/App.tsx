import { useState } from 'react';
import './App.css';
import Botao from './componentes/Botao';
import Cabecalho from './componentes/Cabecalho';
import { Input } from './componentes/Input';

interface Tarefa {
  id: string;
  descricao: string;
  concluida: boolean;
}

export default function App() {
  const [tarefas, setTarefas] = useState<Array<Tarefa>>([]);
  const [form, setForm] = useState<string>('');


  function addTarefa(descricao: string) {
    if(descricao.length > 0) {
      const tarefa: Tarefa = { id: (tarefas.length).toString(), descricao: descricao, concluida: false };
      setTarefas([...tarefas, tarefa])
    }
    return;
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(e.target.value)
  }
  function concluirTarefa(id: string) {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
    )
    )
  }

  return (
    <>
      <div className='App-header'>
        <Cabecalho texto='Bem vindo' />
        <img src="./logo.svg" className='App-logo' alt='logo' />
        <section style={{ display: 'flex', justifyContent: 'space-between', width: '30vw' }}>
          <Input type='text' onChange={handleChange} defaultValue={form} />
          <Botao onClick={() => addTarefa(form)}>
            Adicionar Tarefa
          </Botao>
        </section>
        <div>
          <h5>Tarefas pendentes</h5>
          <ul>
            {tarefas.map((tarefa) => (
              !tarefa.concluida &&
              <li key={tarefa.id}>
                <div>
                  {tarefa.descricao}
                  <Botao onClick={() => concluirTarefa(tarefa.id)}>
                    Concluir tarefa
                  </Botao>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Tarefas concluídas</h5>
          <ul>
            {tarefas.map((tarefa) => (
              tarefa.concluida &&
              <li key={tarefa.id}>
                {tarefa.descricao}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

