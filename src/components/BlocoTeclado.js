import cliqueNoBloco from "./cliqueNoBloco";

export default function BlocoTeclado(props) {

    console.log(props);

    return (

        <button className="blocoTeclado" onClick={() => {cliqueNoBloco(props.item)}}>{props.item.toUpperCase()}</button>

    )
}