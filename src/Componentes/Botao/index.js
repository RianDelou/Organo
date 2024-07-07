import "./Botao.css"

const Botao = (props) => {

    return (
        <button className="buttonForInput">{props.children}</button>
    )
}

export default Botao;