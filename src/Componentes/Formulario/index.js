import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ArraySelect from "../ArraySelect";
import Botao from "../Botao";
import { useState, useRef, useEffect} from "react";
import SelectFile from "../SelectFile";

const Formulario = (props) => {
  const [getName, setName] = useState("");
  const [getPhotoURL, setPhotoURL] = useState("");
  const [getAgent, setAgent] = useState("");
  const [getNameAgent, setNameAgent] = useState("");
  const [getMap, setMap] = useState("");
  const [listaAgentes, setListaAgentes] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch("https://valorant-api.com/v1/agents/");
      const result = await response.json();
      const playableAgents = result.data.filter(agent => agent.isPlayableCharacter);
      setListaAgentes(playableAgents);
    }

    fetchData();
  }, []);

  const aoSalvar = (event) => {
    event.preventDefault();

    let submitControl = props.novoPlayer({
      getName,
      getPhotoURL,
      getAgent,
      getMap,
    });

    if (submitControl) {
      
      setName("");
      setPhotoURL("");
      setAgent("");
      setNameAgent("");
      setMap("");
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // eu tenho o valor do input aqui, pois estou armazenando no useRef. Pois, eu tenho a referencia dele com o useRef.
      }
    }
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do(a) Jogador(a)</h2>
        <p className="alert">{props.alert}</p>
        <ArraySelect
          required={true}
          label="Mapa"
          itens={props.listaMapas}
          handleChange={(event) => 
          {
            setMap(event.target.value)
          }
          }
          value={getMap}
        />
        <ArraySelect
          required={true}
          label="Agente"
          itens={listaAgentes.map((value) => value.displayName)}
          handleChange={(event) => {
            const agenteEncontrado = listaAgentes.find(
              (value) => value.displayName === event.target.value
            );
            if (agenteEncontrado) {
              setAgent(agenteEncontrado);
              setNameAgent(agenteEncontrado.displayName);
            }
          }}
          value={getNameAgent}
        />
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite o nome do(a) jogador(a)"
          handleChange={(event) => setName(event.target.value)}
          value={getName}
        />
        <SelectFile
          required={true}
          label="Foto do player"
          handleChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setPhotoURL(reader.result);
              };
              reader.readAsDataURL(file);
            }
          }}
          value={getPhotoURL}
          inputRef={fileInputRef}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
