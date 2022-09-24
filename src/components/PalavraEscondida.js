import styled from "styled-components"

export default function PalavraEscondida(props) {

    return (

        <ContainerPalavraEscondida>

            {props.palavraE.map((item, i) =>
                <Palavra
                    {...props}
                    color={props.classe}
                    key={i}>
                    {item}
                </Palavra>)}

        </ContainerPalavraEscondida>

    )

}

const ContainerPalavraEscondida = styled.div`
    background-color: #A9A9A9;
    width: 100%;
    font-weight: bold;
    display: flex; 
    justify-content: center;
    align-items: center;
    border: 2px solid;
`
const Palavra = styled.h1 `
    margin: 10px;
    color: ${props => props.color};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 50px;
    font-weight: bold;
`