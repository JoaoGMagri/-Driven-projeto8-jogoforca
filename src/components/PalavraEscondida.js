import styled from "styled-components"

export default function PalavraEscondida(props) {

    return (

        <ContainerPalavraEscondida>

            {props.palavraE.map((item, i) =>
                <Palavra
                    className={props.classe}
                    key={i}>
                    {item}
                </Palavra>)}

        </ContainerPalavraEscondida>

    )

}

const ContainerPalavraEscondida = styled.div`

    width: 100%;
    font-weight: bold;
    display: flex; 
    justify-content: center;
    align-items: center;

    border: 2px solid;
    border-radius: 50px

`

const Palavra = styled.h1 `

    margin: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;

`