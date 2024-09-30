import './Botao.css'
import '../../../variaveis.css'

const Botao = (props) => {
    return (
        <button type='button' className='botao'>
            <span>{props.span}</span>
            <img src= {`${process.env.PUBLIC_URL}/imagens/icon-seta.svg`} 
                alt="Icone de seta" />
        </button>
    )
}

export default Botao