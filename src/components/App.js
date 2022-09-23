//image
import imagemLogo from "../assets/logoforca.png"
import imagem_0 from "../assets/forca0.png"
import imagem_1 from "../assets/forca1.png"
import imagem_2 from "../assets/forca2.png"
import imagem_3 from "../assets/forca3.png"
import imagem_4 from "../assets/forca4.png"
import imagem_5 from "../assets/forca5.png"
import imagem_6 from "../assets/forca6.png"

//style-components
import styled from 'styled-components';
import GlobalStyle from "./GlobalStyle/GlobalStyle"

//Arrays-Objetos
import palavras from "./objetos/palavras";

//Componentes
import PalavraEscondida from "./PalavraEscondida"
import React, { useState } from "react";
import Teclado from "./Teclado"
import Chute from "./Chute"
import Topo from "./Topo"

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
        setImagem(imagem_0);
        setNum(0);
        const indexPalavra = Math.floor(Math.random() * palavras.length);
        setPalavraSelecionada(palavras[indexPalavra].split(""));
        setPalavraEscondida(Array(palavras[indexPalavra].length).fill("_"));

    }

    function clicarBotão(index, letra) {

        const novaLista = habilitado.filter(idx => idx !== index);
        setHabilitado(novaLista);
        comparaLetras(letra);

    }

    function comparaLetras(letra) {

        let novoArray = palavraEscondida;
        let tentativaErrada = true;

        for (let i = 0; i < palavraSelecionada.length; i++) {

            if (letra === palavraSelecionada[i].normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
                novoArray[i] = palavraSelecionada[i];
                tentativaErrada = false;
            }

        }
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
        <Container>

            <GlobalStyle />
            <Topo
                imagem={imagemLogo}
                comecarjogo={comacarJogo}
            />

            <TelaDoJogo>

                <ImagemForca src={imagem} alt="" />


                <PalavraEscondida
                    palavraE={palavraEscondida}
                    classe={resultadoDoJogo}
                />

                <Teclado
                    func={clicarBotão}
                    habilitado={habilitado}
                />

                <Chute
                    funcChute={setChute}
                    funcChutar={tentaticaDeChute}
                    habilitado={habilitado}
                    chute={chute}
                />


            </TelaDoJogo>

        </Container >

    )

}

const Container = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const ImagemForca = styled.img`

    width: 40%;
    align-items: center;

`

const TelaDoJogo = styled.div`

    margin-top: 20px;
    border: 5px solid;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

