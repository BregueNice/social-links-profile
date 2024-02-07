import './botao.css'

export default function Botao(props: { nome: string, link: string }) {
    return (
        <a href={props.link} target='_blank'>{props.nome}</a>
    )
}