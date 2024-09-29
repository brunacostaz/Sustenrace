import Banner from './componentes//elementos/Banner';
import AbaForum from './componentes/AbaForum';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import SessaoBPM from './componentes/SessaoBPM';
import SessaoFormulaE from './componentes/SessaoFormulaE';
import SessaoImpactos from './componentes/SessaoImpactos';
import SessaoRecompensas from './componentes/SessaoRecompensas';
import SessaoSolucao from './componentes/SessaoSolucao';
import SessaoSustenrace from './componentes/SessaoSustenrace';
import SessaoUniao from './componentes/SessaoUniao';

function App() {
  return (
    <div className="App">
      <section id='home'>
        <Header />
      </section>
      <Banner />
      <section id='formulaE'>
        <SessaoFormulaE />
      </section>
      <section id='impactos'>
        <SessaoImpactos />
      </section>
      <section id='sustenrace'>
        <SessaoSustenrace />
      </section>
      <section>
        <SessaoUniao />
      </section>
      <section id='produtos'>
        <SessaoSolucao />
      </section>
      <section>
        <SessaoRecompensas />
      </section>
      <section id="bpm">
        <SessaoBPM />
      </section>
      <section id='forum'>
        <AbaForum />
      </section>
      <Footer />
    </div>
  );
}

export default App;
