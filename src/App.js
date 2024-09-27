import Banner from './componentes//elementos/Banner';
import AbaForum from './componentes/AbaForum';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import SessaoFormulaE from './componentes/SessaoFormulaE';
import SessaoImpactos from './componentes/SessaoImpactos';
import SessaoRecompensas from './componentes/SessaoRecompensas';
import SessaoSolucao from './componentes/SessaoSolucao';
import SessaoSustenrace from './componentes/SessaoSustenrace';
import SessaoUniao from './componentes/SessaoUniao';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SessaoFormulaE />
      <SessaoImpactos />
      <SessaoSustenrace />
      <SessaoUniao />
      <SessaoSolucao />
      <SessaoRecompensas />
      <AbaForum />
      <Footer />
    </div>
  );
}

export default App;
