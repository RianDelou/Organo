import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import { useState} from "react";
import Mapa from "./Componentes/Mapa";
import Footer from "./Componentes/Footer";
function App() {
  const mapas = [
    {
      
      nome: "Icebox",
      corPrimaria: "#e8f5ff ",
      corSecundaria: "#9acef8",
    },
    {
      nome: "Sunset",
      corPrimaria: "#ffe4ec",
      corSecundaria: "#fa8fb1",
    },
    {
      nome: "Lotus",
      corPrimaria: "#d0fdd7",
      corSecundaria: "#64c27b",
    },
    {
      nome: "Bind",
      corPrimaria: "#f7dabe",
      corSecundaria: "#b57e4e",
    },
    {
      nome: "Ascent",
      corPrimaria: "#faafaf",
      corSecundaria: "#f55b5b",
    },
    {
      nome: "Abyss",
      corPrimaria: "#8adede",
      corSecundaria: "#1c9494",
    },
  ];

  const [getPlayers, setPlayers] = useState([]);
  const [getAlert, setAlert] = useState();

  return (
    <div className="App">
      <Banner />
      <Formulario
        novoPlayer={(player) => {
          
          const playersCadaMap = getPlayers.filter((value) => value.getMap === player.getMap);

          if (playersCadaMap.length < 5) {
            setPlayers([...getPlayers, player]);
            setAlert("");
            return true;
          } else {
            setAlert("Player não adicionado: O mapa "+player.getMap+" contém 5 players");
            return false;
          }

        }}
        listaMapas={mapas.map((value) => value.nome)}
        alert={getAlert}
      />

      {mapas.map((map) => {
        return (
          <Mapa
            key={map.nome}
            mapa={map.nome}
            corPrimaria={map.corPrimaria}
            corSecundaria={map.corSecundaria}
            player={getPlayers.filter((value) => value.getMap === map.nome)}
            allMaps={mapas}
          />
        );
      })}

      <Footer />

    </div>
  );
}

export default App;