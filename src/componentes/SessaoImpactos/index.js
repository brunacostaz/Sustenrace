import ElementosImpactos from "../ElementosImpacto"


const SessaoImpactos = () => {
    return (
        <section>
            <h1>Impactos da Fórmula E</h1>
            <ElementosImpactos
                imgSrc= "../../../imagens/imgLampadas.svg"
                imgAlt= "Foto de lâmpadas">
                    <article>
                        <h2>Engajamento e Criatividade</h2>
                        <p>A criação de carros promove a criatividade e o envolvimento do público, gerando uma conexão emocional mais forte com a Fórmula E.</p>
                    </article>
            </ElementosImpactos>
            <ElementosImpactos
                imgSrc= "../../../imagens/imgLivros.svg"
                imgAlt= "Foto de lâmpadas">
                    <article>
                        <h2>Educação</h2>
                        <p>A comparação com a Fórmula 1 permite que os usuários entendam as diferenças e semelhanças entre as duas categorias, informando melhor o público sobre a relevância da Fórmula E.</p>
                    </article>
            </ElementosImpactos>
            <ElementosImpactos
                imgSrc= "../../../imagens/imgPercepcao.svg"
                imgAlt= "Foto de lâmpadas">
                    <article>
                        <h2>Percepção</h2>
                        <p>A solução pode mudar a percepção de que os carros elétricos são inferiores.</p>
                    </article>
            </ElementosImpactos>
        </section>
    )
}

export default SessaoImpactos