import styled from "styled-components"

export default function Topo(props) {

    return (
        <MenuSuperio>
            <InteriorMenu>
            
                <Logo>
                    <span>Jogo Da Forca </span>
                    <img src={props.imagem} alt="" />
                </Logo>

                <BotãoIniciarJogo
                    onClick={props.comecarjogo}
                    type="Escolher Palavra">
                    Escolher Palavra
                </BotãoIniciarJogo>
            
            </InteriorMenu>
        </MenuSuperio>
    )

}

const MenuSuperio = styled.div`

    width: 100%;
    height: 70px;
    background-color: #A9A9A9;
    border-bottom: 5px solid #808080;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    right: 0;
    top: 0;

`
const InteriorMenu = styled.div`

    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Logo = styled.div`

    justify-content: flex-end;

    img{
        width: 50px;
    }

    span{
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