import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }

    @media (max-width:820px) {
        width: ${props => props.$expandida ? '90%' : '200px'};

        figcaption h3, figcaption h4 {
            font-size: 14px;
        }
        figcaption {
            padding: 6px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 820px) {
        padding: 0;
    }
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {
    const iconeFavorito = !foto.favorita ? "/icones/favorito.png" : "/icones/favorito-ativo.png";
    
    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone>
                    <img src={iconeFavorito} alt="Icone de favorito" onClick={() => aoAlternarFavorito(foto)}/>
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida}>
                    <img onClick={() => aoZoomSolicitado(foto)} src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem