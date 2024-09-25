import NavBar from '../Navbar';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href='./index.html'>
                    <img src='./imagens/logo.svg' alt='Logo da Sustenrace'></img>
                </a>
            </div>
            <NavBar />
        </header>
    )
}

export default Header;