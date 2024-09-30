import './Header.css'
import '../../variaveis.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href='#home'>
                    <img src= {`${process.env.PUBLIC_URL}/imagens/logo-sustenrace.png`} alt='Logo da Sustenrace'></img>
                </a>
                <span>Sustenrace</span>
            </div>
            <nav className='navbar'>
                <ul className='menuLinks'>
                        <li><a href="#formulaE">Fórmula E</a></li>
                        <li><a href="#impactos">Impactos da Corrida</a></li>
                        <li><a href="#sustenrace">Sustenrace</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#carro">Carro 3D</a></li>
                        <li><a href="#bpm">Batimentos Cardíacos</a></li>
                        <li><a href="#forum">Fórum</a></li>
                </ul>
        </nav>
        </header>
    )
}

export default Header;