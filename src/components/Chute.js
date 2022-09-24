import styled from "styled-components"

export default function Chute(props) {

    return (
        <ContainerChute>

            <span>Já sabe a palavra!</span>
            <input
                data-identifier="type-guess"
                disabled={
                    (props.habilitado.length === 0) ? (
                        true
                    ) : (
                        false
                    )}
                placeholder="Tente um chute"
                value={props.chute}
                onChange={(event) => props.funcChute(event.target.value)}
            />
            <Botao
                data-identifier="guess-button"
                estilo={props.habilitado.length === 0}
                disabled={
                    (props.habilitado.length === 0) ? (
                        true
                    ) : (
                        false
                    )}
                onClick={props.funcChutar}
            >
                Chutar
            </Botao>

        </ContainerChute>
    )

}

const ContainerChute = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-right: 10px;
    }

    input{
        width: 500px;
        height: 30px;
        font-size: 20px;
        border: 1px solid black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
`
const Botao = styled.button`
    background-color: ${props => props.estilo ? "rgb(160, 170, 183)" : "rgb(38, 175, 96)"};
    color: ${props => props.estilo ? "rgba(0, 0, 0, 0.308)" : "white"};
    font-size: 15px;
    height: 34px;
    border: 1px solid black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    &:hover{
        cursor: ${props => props.estilo ? "" : "pointer"};
    }
` 


