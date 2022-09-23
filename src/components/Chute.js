import styled from "styled-components"

export default function Chute(props) {

    return (

        <ContainerChute>

            <span>Já sabe a palavra!</span>
            <input
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
            <button
                disabled={
                    (props.habilitado.length === 0) ? (
                        true
                    ) : (
                        false
                    )}
                onClick={props.funcChutar}
            >
                Chutar
            </button>

        </ContainerChute>

    )

}

const ContainerChute = styled.div`

    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-right: 10px;
    }

    input{
        width: 500px;
        height: 60px;
        font-size: 20px;
        border: 1px solid black;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button{
        height: 64px;
        border: 1px solid black;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }

`