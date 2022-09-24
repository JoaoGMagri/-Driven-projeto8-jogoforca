import alfabeto from "./objetos/alfabeto"

import styled from "styled-components"

export default function Teclado(props) {

    return (
        <ContainerTeclado>

            {alfabeto.map((item, i) =>
                <Tecla
                    {...props}
                    onClick={(() => props.func(i, item))}
                    estadoDoBotao={props.habilitado.includes(i) ? false : true}
                    disabled={props.habilitado.includes(i) ? false : true}
                    key={i}>
                    {item.toUpperCase()}
                </Tecla>)}

        </ContainerTeclado>
    )

}

const ContainerTeclado = styled.div`
    width: 800px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Tecla = styled.button`
    width: 50px;
    height: 50px;

    margin:5px 5px;

    background-color: ${props => props.estadoDoBotao ? "rgb(160, 170, 183)" : "rgb(224, 236, 243)"};
    color: ${props => props.estadoDoBotao ? "rgba(0, 0, 0, 0.308)" : "rgb(76, 112, 145)"};

    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: bold;

    border-radius: 5px;
    border: 2px solid rgb(173, 203, 225);

    &:hover{
        background-color: ${props => props.estadoDoBotao ? "" : "rgb(173, 203, 225)"};
        cursor: ${props => props.estadoDoBotao ? "" : "pointer"};
    }
`