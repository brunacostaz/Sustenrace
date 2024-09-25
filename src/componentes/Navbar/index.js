import './Navbar.css'
import React, { useState } from 'react'

const NavBar = () => {
    const [ ativo, setAtivo ] = useState(false); 

    const toggleMenu = () => {
        setAtivo(!ativo)
    }

    return (
        <nav className='navbar'>
            <div 
                className={`menuHamburguer ${ativo ? 'menuAtivo' : ''}`}
                onClick={toggleMenu}
                >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={`menuLinks ${ativo ? 'menuAtivo' : ''}`}>
                    <li><a href="#">Fórmula E</a></li>
                    <li><a href="#">Impactos Positivos e Negativos</a></li>
                    <li><a href="#">Carro 3D</a></li>
                    <li><a href="#">Batimentos Cardíacos</a></li>
                    <li><a href="#">Fórum</a></li>
            </ul>
            <a href="#" className='perfil'>
                <img src="../../../imagens/icon-profile.svg" alt="icone de perfil, dese=en"></img>
            </a>
        </nav>
    )
}

export default NavBar


