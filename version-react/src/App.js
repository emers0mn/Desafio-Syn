import './App.css';
import Contato from './componentes/Contato';

function App() {
  return (
    <div className="App">
      <Contato />

      <section className='bg-azul'>
        <div>
          <h1 className='titulos'>Chega de esperar o fim do mês!</h1>
          <p>A Empresa proporciona para seus clientes
            uma solução inovadora que transforma
            radicalmente o dia a dia do RH.</p>
        </div>

          <img src={require('./image/imagem-01.png')} />
      </section>

      <section className='bg-orange conteudo-02'>
        <h2 className='titulos'>De básico a folha Empresa não tem nada!</h2>
        <div className='conteudo-002'>
          <p>Nosso padrão de folha é o mais completo
            do mercado!
            Diferente dos outros fornecedores, nossos
            KPI's, Workflow, Gestão de benefícios e
            Social fazem parte do sistema Folha de
            Pagamentos Empresa sem custos adicionais!</p>
            <img src={require('./image/imagem-02.png')} />
        </div>
      </section>

      
    </div>
  );
}

export default App;
