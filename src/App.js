import Nome from './components/Nome';
import { useState } from 'react'; 

function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar ReactJS'
  ]);
  

  function handleRegister(e){
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrando usuario</h1>
     <form onSubmit={handleRegister}>
      <label>Nome da tarefa: </label><br/>
      <input placeholder="Digite uma tarefa" value={input} onChange= { (e) => setInput(e.target.value)}/><br/>
      <button type="submit">Registrar</button>

     </form>
     <br/><br/>
     <ul>
      {tarefas.map( tarefa => (
        <li>{tarefa}</li>
      ))}
     </ul>
    </div>

  );
}

export default App;
