import './App.css';
import Banner from './componentes//elementos/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import SessaoFormulaE from './componentes/SessaoFormulaE';
import SessaoImpactos from './componentes/SessaoImpactos';
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
      <Footer />
    </div>
  );
}

export default App;
