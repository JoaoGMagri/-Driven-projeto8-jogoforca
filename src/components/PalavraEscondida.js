export default function PalavraEscondida(props) {

    return (

        <div className="palavraEscondida">

            {props.palavraE.map((item, i) =>
                <h1
                    className={props.classe}
                    key={i}>
                    {item}
                </h1>)}

        </div>

    )

}