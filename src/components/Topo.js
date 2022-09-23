export default function Topo(props) {

    return(
        <div className="topo">

                <div className="imagem">

                    <img src={props.imagem} alt="" />

                </div>

                <div className="direita">

                    <button
                        onClick={props.comecarjogo}
                        className="botao"
                        type="Escolher Palavra">

                        Escolher Palavra

                    </button>

                </div>

            </div>
    )

}