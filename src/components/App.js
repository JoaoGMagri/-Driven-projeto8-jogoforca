import alfabeto from "./alfabeto"
import BlocoTeclado from "./BlocoTeclado"
import palavras from "./palavras";

export default function () {

    const arrayTeclado = alfabeto();
    return (
        <div className="app">
            <div className="topo">

                <div className="imagem">

                    <img src="./assets/forca0.png" alt="" />

                </div>

                <div className="direita">

                    <button className="botao" type="Escolher Palavra">Escolher Palavra</button>

                    <div className="palavraEscondida">

                        <h1>_</h1>
                        <h1>_</h1>
                        <h1>_</h1>
                        <h1>_</h1>
                        <h1>_</h1>

                    </div>

                </div>

            </div>

            <div className="teclado">

                {arrayTeclado.map((item, i) => <BlocoTeclado item={item} key={i}/>)}

            </div>

            <div className="chute">

                <span className="descricao">Já sei a palavra!</span>
                <input className="campoDoChute"></input>
                <button className="chutar">Chutar</button>

            </div>

        </div>

    )

}