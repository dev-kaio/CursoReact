import './App.css';
import SayMyName from './components/sayMyName';
import Pessoa from './components/pessoa';
import Frase from './components/frase';

function App() {

  const nome = "Kaiolito";
  return (
    <div className="App">
      <Frase />
        < SayMyName nome={nome} />
        <Pessoa nome="Kaiolito" idade="18" profissao="Aux. Estatística" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
