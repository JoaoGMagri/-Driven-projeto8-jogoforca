import alfabeto from "./objetos/alfabeto"

export default function Teclado(props) {

    return (

        <div className="teclado">

            {alfabeto.map((item, i) =>
                <button
                    onClick={(() => props.func(i, item))}
                    className={
                        props.habilitado.includes(i) ? (
                            "blocoTeclado-Habilitado"
                        ) : (
                            "blocoTeclado-Desabilitado"
                        )}
                    disabled={
                        props.habilitado.includes(i) ? (
                            false
                        ) : (
                            true
                        )}
                    key={i}>
                    {item.toUpperCase()}
                </button>)}

        </div>

    )

}