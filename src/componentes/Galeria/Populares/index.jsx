import styled from "styled-components";
import TituloEstilizado from "../../TituloEstilizado";
import populares from "./populares.json";

const ImagemPopularesEstilizada = styled.img`
    border: 1px solid transparent;
    border-radius: 20px;
`

const BotaoPopularesEstilizado = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    padding: 10px;
    width: 100%;
    border: 1px solid #C98CF1;
    border-radius: 10px;
`

const SectionPopularesEstilizada = styled.section`
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;

`
const DivImagensEstilizada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`

const Populares = () => {
    return (
        <SectionPopularesEstilizada>
            <TituloEstilizado $alinhamento="center">
                Populares
            </TituloEstilizado>
            <DivImagensEstilizada>
                {populares.map(popular => <ImagemPopularesEstilizada key={popular.id} src={popular.path} alt={popular.alt} />)}
                <BotaoPopularesEstilizado>
                    Ver mais
                </BotaoPopularesEstilizado>
            </DivImagensEstilizada>

        </SectionPopularesEstilizada>
    );
}

export default Populares;