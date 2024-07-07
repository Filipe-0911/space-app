import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState, useEffect } from "react";
import ModalZoom from "./componentes/ModalZoom";
import tags from "./componentes/Galeria/Tags/tags.json"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

  @media (max-width: 820px) {
    width: 100%;
    
  }

`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
  @media (max-width: 820px) {
    width:100%;
  }
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;

  @media (max-width: 820px) {
    display: block;
  }
`;

const ConteudoDaGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [fotosFiltradas, setFotosFiltradas] = useState(fotosDaGaleria);
  const [tagSelecionada, setTagSelecionada] = useState({ id: 0 });
  const [valorInput, setValorInput] = useState('')

  const aoDigitar = (evento) => {
    setValorInput(() => evento.target.value)
    let idTagInput = tags.find(tag => tag.titulo.toLowerCase().includes(valorInput.toLowerCase()));

    setTagSelecionada(idTagInput ? idTagInput : { id: 0 });

  }

  useEffect(() => {
    if (tagSelecionada.id === 0) {
      setFotosFiltradas(fotosDaGaleria);
    } else {
      setFotosFiltradas(fotosDaGaleria.filter(foto => foto.tagId === tagSelecionada.id));
    }
  }, [tagSelecionada, fotosDaGaleria]);

  const filtrarPorTags = (tag) => {
    setTagSelecionada(tag);
  };

  const aoAlternarFavorito = (foto) => {
    const novaFoto = {
      ...foto,
      favorita: !foto.favorita
    };
    setFotosDaGaleria(fotosDaGaleria.map(fotoGaleria => {
      return fotoGaleria.id === foto.id ? novaFoto : fotoGaleria;
    }));
    setFotoSelecionada(fotoSelecionada => {
      return fotoSelecionada?.id === foto.id ? novaFoto : fotoSelecionada;
    });
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho aoDigitar={aoDigitar} />
        <MainContainer>
          <BarraLateral />
          <ConteudoDaGaleria>
            <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage="imagens/banner.png" />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosFiltradas}
              aoAlternarFavorito={aoAlternarFavorito}
              aoFiltrarPorTag={filtrarPorTags}
            />
          </ConteudoDaGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  );
};

export default App;
