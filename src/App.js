import Banner from './componentes/elementos/Banner';
import Footer from './componentes/Footer';
import Header from './componentes/Header';
import AbaForum from './componentes/SessoesHome/AbaForum';
import SessaoBPM from './componentes/SessoesHome/SessaoBPM';
import SessaoFormulaE from './componentes/SessoesHome/SessaoFormulaE';
import SessaoImpactos from './componentes/SessoesHome/SessaoImpactos';
import SessaoRecompensas from './componentes/SessoesHome/SessaoRecompensas';
import SessaoSolucao from './componentes/SessoesHome/SessaoSolucao';
import SessaoSustenrace from './componentes/SessoesHome/SessaoSustenrace';
import SessaoUniao from './componentes/SessoesHome/SessaoUniao';
import CarroHome from './componentes/SessoesHome/CarroHome';

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
            <section id='carro'>
                <CarroHome />
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
