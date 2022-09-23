import React, { useState } from "react";
import alfabeto from "./alfabeto"
import palavras from "./palavras";
import imagem_0 from "../assets/forca0.png"
import imagem_1 from "../assets/forca1.png"
import imagem_2 from "../assets/forca2.png"
import imagem_3 from "../assets/forca3.png"
import imagem_4 from "../assets/forca4.png"
import imagem_5 from "../assets/forca5.png"
import imagem_6 from "../assets/forca6.png"

export default function App() {

    const [palavraSelecionada, setPalavraSelecionada] = useState([]);
    const [palavraEscondida, setPalavraEscondida] = useState([]);
    const [resultadoDoJogo, setResultadoDoJogo] = useState("");
    const [habilitado, setHabilitado] = useState([]);
    const [imagem, setImagem] = useState(imagem_0);
    const [chute, setChute] = useState("");
    const [num, setNum] = useState(0);

    console.log(palavraSelecionada);

    function comacarJogo() {
        let array = []
        for (let i = 0; i < 26; i++) {
            array.push(i);
        }
        const array2 = [...habilitado, ...array];
        setHabilitado(array2);
        setResultadoDoJogo("");
        setImagem(imagem_0)
        const indexPalavra = Math.floor(Math.random() * palavras.length)
        setPalavraSelecionada(palavras[indexPalavra].split(""));
        setPalavraEscondida(Array(palavras[indexPalavra].length).fill("_"));

    }

    function clicarBotão(index, letra) {

        const novaLista = habilitado.filter(idx => idx !== index);
        setHabilitado(novaLista);
        comparaLetras(letra);

    }

    function comparaLetras(letra) {

        let array = [];
        let novoArray = palavraEscondida;
        let tentativaErrada = false;

        for (let i = 0; i < palavraSelecionada.length; i++) {

            if (letra === palavraSelecionada[i].normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
                array.push(i);
            }

        }

        for (let i = 0; i < palavraSelecionada.length; i++) {
            for (let j = 0; j < array.length; j++) {

                if (array[j] === i) {

                    novoArray[i] = palavraSelecionada[i];

                }

            }
        }

        if (array.length === 0) {
            tentativaErrada = true;
        }

        console.log(array)
        setPalavraEscondida([...novoArray]);

        if (tentativaErrada === true) {

            setNum(num + 1);
            testeDeFimPerdendo();

        } else {

            testeDeFimGanhando();

        }

    }

    function testeDeFimGanhando() {

        if (palavraSelecionada.join("") === palavraEscondida.join("")) {
            setResultadoDoJogo("verde");
            setHabilitado([]);
            setChute("");
        }

    }

    function testeDeFimPerdendo() {

        switch (num) {
            case 0: setImagem(imagem_1); break;

            case 1: setImagem(imagem_2); break;

            case 2: setImagem(imagem_3); break;

            case 3: setImagem(imagem_4); break;

            case 4: setImagem(imagem_5); break;

            case 5:
                setImagem(imagem_6);
                setResultadoDoJogo("vermelho");
                setPalavraEscondida([...palavraSelecionada]);
                setHabilitado([]);
                setNum(0);
                setChute("");
                break;

            default: break;
        }


    }

    function tentaticaDeChute() {
        
        if (chute === "") {
            alert("Escreva algo");
        } else if (chute.normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === palavraSelecionada.join("").normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
            setResultadoDoJogo("verde");
            setHabilitado([]);
            setPalavraEscondida([...palavraSelecionada]);
            setChute("");
        } else {
            setImagem(imagem_6);
            setResultadoDoJogo("vermelho");
            setPalavraEscondida([...palavraSelecionada]);
            setHabilitado([]);
            setNum(0);
            setChute("");
        }

    }

    return (
        <div className="app">
            <div className="topo">

                <div className="imagem">

                    <img src={imagem} alt="" />

                </div>

                <div className="direita">

                    <button
                        onClick={comacarJogo}
                        className="botao"
                        type="Escolher Palavra">

                        Escolher Palavra

                    </button>

                </div>

            </div>

            <div className="palavraEscondida">

                {palavraEscondida.map((item, i) =>
                    <h1
                        className={resultadoDoJogo}
                        key={i}>
                        {item}
                    </h1>)}

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
                        disabled={
                            habilitado.includes(i) ? (
                                false
                            ) : (
                                true
                            )}
                        key={i}>
                        {item.toUpperCase()}
                    </button>)}

            </div>

            <div className="chute">

                <span className="descricao">Já sei a palavra!</span>
                <input
                    disabled={
                        (habilitado.length === 0) ? (
                            true
                        ) : (
                            false
                        )}
                    placeholder="Chutar"
                    value={chute}
                    className="campoDoChute"
                    onChange={(event) => setChute(event.target.value)}
                />
                <button
                    disabled={
                        (habilitado.length === 0) ? (
                            true
                        ) : (
                            false
                        )}
                    className="chutar"
                    onClick={tentaticaDeChute}
                >
                    Chutar
                </button>

            </div>

        </div >

    )

}