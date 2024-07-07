import styled from "styled-components";
import tags from "./tags.json";

const ContainerBotaoEstilizado = styled.div`
    display: flex;
    align-items:center;
    font-size: 24px;
    gap:24px;
    color: #D9D9D9;
    line-height: 28.8px;
    @media (max-width: 744px) {
        font-size: 14px;
    }

`

const BotaoEstilizadoTag = styled.button`
    --cor-gradiente: linear-gradient(174.61deg, #C98CF1 100%, #7B78E5 100%);
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #7B78E5;
    color: #D9D9D9;
    padding: 12px;
    height:49px ;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-sizing: border-box;
    border: 2px solid transparent;

    &:hover {
      border-color: var(--cor-gradiente);
    }

    @media (max-width: 744px) {
        height: 20px;
    }
`

const Tags = ({ aoFiltrarPorTag }) => {
    return(
        <ContainerBotaoEstilizado>
            <p>Busque por tags:</p>
            {tags.map(tag => <BotaoEstilizadoTag onClick={() => aoFiltrarPorTag(tag)} $ativo key={tag.id}>{tag.titulo}</BotaoEstilizadoTag>)}
        </ContainerBotaoEstilizado>
    );
}

export default Tags;