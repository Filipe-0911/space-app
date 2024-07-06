import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`background: linear-gradient(174.61deg,#041833 4.16%,#04244f 48%,#154580 96.76%); width:100%; min-height: 100vh;`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display:flex;
  gap: 24px;
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

  const filtrarPorTags = (tag) => {
    if (tag.id === 0) {
      return setFotosFiltradas(fotosDaGaleria.map(foto => {
        return foto
      }))
    }
    setFotosFiltradas(fotosDaGaleria.filter(foto => {
      return foto.tagId === tag.id
    }))

  }

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada(fotoSelecionada => {
        return {
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        }
      })
      setFotosFiltradas(fotoSelecionada => {
        return {
          ...fotoSelecionada,
          favorita: !fotoSelecionada.favorita
        }
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
    setFotosFiltradas(fotosFiltradas.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoDaGaleria>
            <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage="../src/assets/banner.png" />
            <Galeria
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={fotosFiltradas}
              aoAlternarFavorito={aoAlternarFavorito}
              aoFiltrarPorTag={filtrarPorTags}
            />
          </ConteudoDaGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom foto={fotoSelecionada} aoFechar={() => setFotoSelecionada(null)} aoAlternarFavorito={aoAlternarFavorito} />
    </FundoGradiente>
  )
}

export default App
