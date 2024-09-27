import NavBar from '../Navbar';
import './Header.css'
import '../../variaveis.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href='./index.html'>
                    <img src='./imagens/logo-sustenrace.png' alt='Logo da Sustenrace'></img>
                </a>
                <span>Sustenrace</span>
            </div>
            <NavBar />
        </header>
    )
}

export default Header;