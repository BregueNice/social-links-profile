import Botao from '../botao'
import './container.css'

export default function Container() {
    const redes = [
        {
            nome: "Github",
            link: "https://github.com/BregueNice"
        },
        {
            nome: "Frontend Mentor",
            link: "https://www.frontendmentor.io/profile/BregueNice"
        },
        {
            nome: "LinkedIn",
            link: "https://www.linkedin.com/in/vin%C3%ADcius-gabriel-5a64a519a/"
        },
        {
            nome: "Twitter",
            link: "https://twitter.com/breguenice"
        },
        {
            nome: "Instagram",
            link: "https://www.instagram.com/breguenice/"
        }

    ]
    return (
        <div className="container">
            <div>
                <div className='foto'></div>
                <h1>Vinicius Gabriel</h1>
                <span>Pernambuco, Brasil</span>
                <p>"Front-end developer"</p>
            </div>
            <div className='botoes'>
                {redes.map((itens, index) => (
                    <Botao nome={itens.nome} link={itens.link} />
                ))}

            </div>
        </div>
    )
}