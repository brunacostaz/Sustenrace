import './App.css';
import Banner from './componentes//elementos/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import SessaoFormulaE from './componentes/SessaoFormulaE';
import SessaoImpactos from './componentes/SessaoImpactos';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SessaoFormulaE />
      <SessaoImpactos />
      <Footer />
    </div>
  );
}

export default App;
