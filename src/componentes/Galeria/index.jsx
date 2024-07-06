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
    gap: 1em;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {

    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <TituloEstilizado>Navege pela galeria</TituloEstilizado>
                    <DivGaleriaEstilizada>
                        {fotos.map((foto, index) => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={index}
                            foto={foto}
                        />)}
                    </DivGaleriaEstilizada>
                </SecaoFluida>
                <Populares />

            </GaleriaContainer>
        </>
    );
}

export default Galeria;