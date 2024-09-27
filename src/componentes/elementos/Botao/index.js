import './Botao.css'
import '../../../variaveis.css'

const Botao = (props) => {
    return (
        <button type='button' className='botao'>
            <span>{props.span}</span>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </button>
    )
}

export default Botao