import styled from "styled-components";

const FigureEstilizado = styled.figure`
    display:flex;
    flex-direction:column;
    width: 444px;
    height: 336px;
    border: 1px transparent;
    border-radius:80px;
    color: white;
`
const FigCaptionEstilizado = styled.figcaption`
    display:flex;
    flex-direction:column;
    background-color: #001634;
    height:80px;
    h3 {
        padding: 0;
        margin: 0;
    }
`
const SectionEstilizada = styled.section`
    display:flex;
`
const FooterImagemEstilizado = styled.footer`
    display:flex;
    justify-content:space-between;
    p {
        padding: 0;
        margin: 0;
    }
    
`

const Imagem = ({ foto }) => {
    return(
        <FigureEstilizado id={foto.tagId}>
            <img src={foto.path} alt={foto.titulo.toLowerCase()}/>
            <FigCaptionEstilizado>
                <h3>{foto.titulo}</h3>
                <FooterImagemEstilizado>
                    <p>{foto.fonte}</p>
                    <SectionEstilizada>
                        <button>Favoritar</button>
                        <button>Expandir</button>
                    </SectionEstilizada>
                </FooterImagemEstilizado>
            </FigCaptionEstilizado>

        </FigureEstilizado>
    );
}

export default Imagem;