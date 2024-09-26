import './Elementos.css'
import React from 'react'

const ElementosImpactos = (props) => {
    console.log(props)
    return (
        <article className='container'>
            <img 
                src= {props.imgSrc}
                alt= {props.imgAlt}
                className='imgRedonda'
            />
            {React.Children.map( props.children, (child) => {
                if (child.type == 'article') {
                    return React.cloneElement(child, {className: "containerTexto"})
                }
                return child
            } )}
        </article>
    )
}

export default ElementosImpactos