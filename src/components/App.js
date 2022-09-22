import React, { useState } from "react";
import alfabeto from "./alfabeto"
import palavras from "./palavras";

export default function () {
    
    const [habilitado, setHabilitado] = useState([]);
    const [palavraSelecionada, setPalavraSelecionada] = useState([])
    const [palavraEscondida, setPalavraEscondida] = useState([])
    
    /* console.log(palavras);
    console.log(alfabeto); */
    console.log(palavraSelecionada);

    function comacarJogo() {
        let array = []
        for (let i=0; i<26; i++) {
            array.push(i);
        }
        const array2 = [...habilitado, ...array];
        setHabilitado(array2);

        const indexPalavra= Math.floor(Math.random() * palavras.length)
        setPalavraSelecionada(palavras[indexPalavra].split(""));
        
        
        setPalavraEscondida(Array(palavras[indexPalavra].length).fill("_"));

    }

    function clicarBotão(index, letra) {

        const novaLista = habilitado.filter( idx => idx !== index);
        setHabilitado(novaLista);

        comparaLetras(letra);

    }

    function comparaLetras(letra) {

        let array = [];
        let novoArray = palavraEscondida;

        for (let i=0; i< palavraSelecionada.length; i++) {

            if(letra === palavraSelecionada[i]) {
                array.push(i);
            }

        }
        
        for (let i=0; i<palavraSelecionada.length; i++) {
            for (let j=0; j<array.length; j++) {

                if( array[j] === i ) {
    
                    novoArray[i] = letra;
    
                }

            }
        }

        setPalavraEscondida([...novoArray]);

    }


    return (
        <div className="app">
            <div className="topo">

                <div className="imagem">

                    <img src="./assets/forca0.png" alt="" />

                </div>

                <div className="direita">

                    <button
                        onClick={comacarJogo}
                        className="botao"
                        type="Escolher Palavra">

                        Escolher Palavra

                    </button>

                    <div className="palavraEscondida">

                        {palavraEscondida.map((item,i) => <h1 key={i}>{item}</h1>)}

                    </div>

                </div>

            </div>

            <div className="teclado">

                {alfabeto.map((item, i) =>
                    <button
                        onClick={(() => clicarBotão(i, item))}
                        className={
                            habilitado.includes(i) ? (
                                "blocoTeclado-Habilitado"
                            ) : (
                                "blocoTeclado-Desabilitado"
                            )}
                        disabled={false}
                        key={i}>
                        {item.toUpperCase()}
                    </button>)}

            </div>

            <div className="chute">

                <span className="descricao">Já sei a palavra!</span>
                <input className="campoDoChute"></input>
                <button className="chutar">Chutar</button>

            </div>

        </div >

    )

}