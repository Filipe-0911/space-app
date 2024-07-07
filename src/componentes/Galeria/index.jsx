import styled from "styled-components";
import TituloEstilizado from "../TituloEstilizado";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
    display:flex;

`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const DivGaleriaEstilizada = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;

    @media (max-width:820px) {
        justify-content: space-evenly;
    }
`

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito, aoFiltrarPorTag }) => {

    return (
        <>
            <Tags aoFiltrarPorTag={aoFiltrarPorTag}/>
            <GaleriaContainer>
                <SecaoFluida>
                    <TituloEstilizado>Navege pela galeria</TituloEstilizado>
                    <DivGaleriaEstilizada>
                        {fotos.map((foto, index) => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={index}
                            foto={foto}
                            aoAlternarFavorito={aoAlternarFavorito}
                        />)}
                    </DivGaleriaEstilizada>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    );
}

export default Galeria;