import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import { useState } from "react";
import Mapa from "./Componentes/Mapa";
import Footer from "./Componentes/Footer";
function App() {
  const mapas = [
    {
      nome: "Icebox",
      corPrimaria: "#e8f5ff ",
      corSecundaria: "#9acef8",
      splashArt:
        "https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png",
    },
    {
      nome: "Sunset",
      corPrimaria: "#ffe4ec",
      corSecundaria: "#fa8fb1",
      splashArt:
        "https://media.valorant-api.com/maps/92584fbe-486a-b1b2-9faa-39b0f486b498/splash.png",
    },
    {
      nome: "Lotus",
      corPrimaria: "#d0fdd7",
      corSecundaria: "#64c27b",
      splashArt:
        "https://media.valorant-api.com/maps/2fe4ed3a-450a-948b-6d6b-e89a78e680a9/splash.png",
    },
    {
      nome: "Bind",
      corPrimaria: "#f7dabe",
      corSecundaria: "#b57e4e",
      splashArt:
        "https://media.valorant-api.com/maps/2c9d57ec-4431-9c5e-2939-8f9ef6dd5cba/splash.png",
    },
    {
      nome: "Ascent",
      corPrimaria: "#faafaf",
      corSecundaria: "#f55b5b",
      splashArt:
        "https://media.valorant-api.com/maps/7eaecc1b-4337-bbf6-6ab9-04b8f06b3319/splash.png",
    },
    {
      nome: "Abyss",
      corPrimaria: "#8adede",
      corSecundaria: "#1c9494",
      splashArt:
        "https://media.valorant-api.com/maps/224b0a95-48b9-f703-1bd8-67aca101a61f/splash.png",
    },
  ];

  const [getPlayers, setPlayers] = useState([]);
  const [getAlert, setAlert] = useState();

  const handleRemovePlayer = (playerName) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.getName !== playerName)
    ); //remove player
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        novoPlayer={(player) => {
          const playersCadaMap = getPlayers.filter(
            (value) => value.getMap === player.getMap
          );
          const playerExistsByName = playersCadaMap.find(
            (value) =>
              value.getName.toLowerCase() === player.getName.toLowerCase()
          );
          const playerExistsByAgent = playersCadaMap.find(
            (value) =>
              value.getAgent.displayName === player.getAgent.displayName
          );

          if (playersCadaMap.length >= 5) {
            setAlert(
              `Player não adicionado: O mapa ${player.getMap} contém 5 players`
            );
            return false;
          } else if (playerExistsByName) {
            setAlert(
              `Player não adicionado: O player ${player.getName} já existe no mapa ${player.getMap}`
            );
            return false;
          } else if (playerExistsByAgent) {
            setAlert(
              `Player não adicionado: O agente ${player.getAgent.displayName} já está sendo usado no mapa ${player.getMap}`
            );
            return false;
          } else {
            setPlayers([...getPlayers, player]);
            setAlert("");
            return true;
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
            splashArt={map.splashArt}
            onRemovePlayer={handleRemovePlayer}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
