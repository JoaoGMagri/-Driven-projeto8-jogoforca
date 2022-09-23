export default function Chute(props) {

    return (

        <div className="chute">

            <span className="descricao">Já sei a palavra!</span>
            <input
                disabled={
                    (props.habilitado.length === 0) ? (
                        true
                    ) : (
                        false
                    )}
                placeholder="Chutar"
                value={props.chute}
                className="campoDoChute"
                onChange={(event) => props.funcChute(event.target.value)}
            />
            <button
                disabled={
                    (props.habilitado.length === 0) ? (
                        true
                    ) : (
                        false
                    )}
                className="chutar"
                onClick={props.funcChutar}
            >
                Chutar
            </button>

        </div>

    )

}