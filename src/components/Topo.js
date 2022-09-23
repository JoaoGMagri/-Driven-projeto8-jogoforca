import styled from "styled-components"

export default function Topo(props) {

    return (
        <MenuSuperio>
            <Logo>
                <h2>Jogo Da Forca </h2>
                <img src={props.imagem} alt="" />
            </Logo>
            <BotãoIniciarJogo
                onClick={props.comecarjogo}
                type="Escolher Palavra">

                Escolher Palavra

            </BotãoIniciarJogo>
        </MenuSuperio>
    )

}

const MenuSuperio = styled.div`

    width: 100%;
    height: 70px;
    background-color: #A9A9A9;
    border-bottom: 5px solid #808080;

    display: flex;
    justify-content: space-around;
    align-items: center;

`

const Logo = styled.div`
    

    display: flex;
    justify-content: center;
    align-items: center;
    

    img{

        width: 50px;

    }

    h2{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 50px;
    }

`

const BotãoIniciarJogo = styled.button`

    width: 150px;
    height: 45px;
    background-color: rgb(38, 175, 96);
    color: white;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: bold;

    border: 0px;
    border-radius: 5px;

    &:hover{
        background-color: rgb(11, 148, 11); 
    }

`

