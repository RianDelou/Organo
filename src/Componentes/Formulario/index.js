import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ArraySelect from "../ArraySelect";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [firstMap] = props.listaMapas;

  const listaAgentes = [
    {
      nome: "Jett",
      funcao: "Duelista",
      icon: "https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png/",
    },
    {
      nome: "Phoenix",
      funcao: "Duelista",
      icon: "https://static.wikia.nocookie.net/valorant/images/1/14/Phoenix_icon.png/",
    },
    {
      nome: "Sage",
      funcao: "Sentinela",
      icon: "https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png/",
    },
    {
      nome: "Sova",
      funcao: "Iniciador",
      icon: "https://static.wikia.nocookie.net/valorant/images/4/49/Sova_icon.png/",
    },
    {
      nome: "Viper",
      funcao: "Controlador",
      icon: "https://static.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png/",
    },
    {
      nome: "Cypher",
      funcao: "Sentinela",
      icon: "https://static.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png/",
    },
    {
      nome: "Reyna",
      funcao: "Duelista",
      icon: "https://static.wikia.nocookie.net/valorant-lore/images/b/b8/Reyna_-_Avatar.png/",
    },
    {
      nome: "KillJoy",
      funcao: "Sentinela",
      icon: "https://pbs.twimg.com/media/EelRuZCWAAAzPxq.png",
    },
    {
      nome: "Breach",
      funcao: "Iniciador",
      icon: "https://static.valorantstats.xyz/agent-headshots/breach-headshot.png",
    },
    {
      nome: "Omen",
      funcao: "Controlador",
      icon: "https://static.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png/",
    },
    {
      nome: "Brimstone",
      funcao: "Controlador",
      icon: "https://static.wikia.nocookie.net/valorant/images/4/4d/Brimstone_icon.png/",
    },
    {
      nome: "Raze",
      funcao: "Duelista",
      icon: "https://static.wikia.nocookie.net/valorant/images/9/9c/Raze_icon.png/",
    },
    {
      nome: "Skye",
      funcao: "Iniciador",
      icon: "https://static.wikia.nocookie.net/valorant/images/3/33/Skye_icon.png/",
    },
    {
      nome: "Yoru",
      funcao: "Duelista",
      icon: "https://static.wikia.nocookie.net/valorant/images/d/d4/Yoru_icon.png/",
    },
    {
      nome: "Astra",
      funcao: "Controlador",
      icon: "https://titles.trackercdn.com/valorant-api/agents/41fb69c1-4189-7b37-f117-bcaf1e96f1bf/displayicon.png",
    },
    {
      nome: "Kay/o",
      funcao: "Iniciador",
      icon: "https://static.valorantstats.xyz/agent-headshots/kayo-headshot.png",
    },
    {
      nome: "Chamber",
      funcao: "Sentinela",
      icon: "https://static.wikia.nocookie.net/valorant/images/0/09/Chamber_icon.png/",
    },
    {
      nome: "Neon",
      funcao: "Duelista",
      icon: "https://static.wikia.nocookie.net/valorant/images/d/d0/Neon_icon.png/",
    },
    {
      nome: "Fade",
      funcao: "Iniciador",
      icon: "https://static.wikia.nocookie.net/valorant/images/a/a6/Fade_icon.png/",
    },
    {
      nome: "Harbor",
      funcao: "Controlador",
      icon: "https://static.wikia.nocookie.net/valorant-lore/images/8/8a/Harbor_-_Avatar.png/",
    },
    {
      nome: "Gekko",
      funcao: "Iniciador",
      icon: "https://static.wikia.nocookie.net/valorant/images/6/66/Gekko_icon.png/",
    },
    {
      nome: "DeadLock",
      funcao: "Sentinela",
      icon: "https://static.wikia.nocookie.net/valorant/images/e/eb/Deadlock_icon.png/",
    },
    {
      nome: "Iso",
      funcao: "Duelista",
      icon: "https://pbs.twimg.com/media/F9eyE2mWwAA-weq.png",
    },
    {
      nome: "Clove",
      funcao: "Controlador",
      icon: "https://static.wikia.nocookie.net/valorant/images/3/30/Clove_icon.png/",
    },
];


  const [firstAgent] = listaAgentes;

  const [getName, setName] = useState("");
  const [getPhoto, setPhoto] = useState("");
  const [getAgent, setAgent] = useState(firstAgent);
  const [getMap, setMap] = useState(firstMap);

  const aoSalvar = (event) => {
    event.preventDefault();
    console.log("Valores submetidos!", getName, getPhoto, getAgent, getMap);

    props.novoPlayer({
      getName,
      getPhoto,
      getAgent,
      getMap,
    });

    setName("");
    setPhoto("");
    
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do Player</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          handleChange={(event) => setName(event.target.value)}
          value={getName}
        />
        <CampoTexto
          label="Foto"
          placeholder="Informe o endereço da imagem"
          handleChange={(event) => setPhoto(event.target.value)}
          value={getPhoto}
        />
        <ArraySelect
          required={true}
          label="Agente"
          itens={listaAgentes.map((value) => value.nome)}
          handleChange={(event) => {
            const agenteEncontrado = listaAgentes.find(
              (value) => value.nome === event.target.value
            );
            if (agenteEncontrado) {
              setAgent(agenteEncontrado);
            }
          }}
          value={getAgent.nome}
        />
        <ArraySelect
          required={true}
          label="Mapa"
          itens={props.listaMapas}
          handleChange={(event) => setMap(event.target.value)}
          value={getMap}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
