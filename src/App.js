import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import { useState } from "react";
import Mapa from "./Componentes/Mapa";
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
      corPrimaria: "#f7cca6",
      corSecundaria: "#aa7444",
    },
    {
      nome: "Ascent",
      corPrimaria: "#ff9c9c",
      corSecundaria: "#ee4242",
    },
    {
      nome: "Abyss",
      corPrimaria: "#53dbdb",
      corSecundaria: "#006666",
    },
  ];

  const [getPlayers, setPlayers] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario
        novoPlayer={(player) => {
          setPlayers([...getPlayers, player]);
          console.log(getPlayers);
        }}
        listaMapas={mapas.map((value) => value.nome)}
      />

      {mapas.map((map) => {
        return (
          <Mapa
            key={map.nome}
            mapa={map.nome}
            corPrimaria={map.corPrimaria}
            corSecundaria={map.corSecundaria}
            player={getPlayers.filter((value) => value.getMap === map.nome)}
          />
        );
      })}

    </div>
  );
}

export default App;