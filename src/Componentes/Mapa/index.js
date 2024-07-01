import Player from "../Player";
import "./Mapa.css";

const Mapa = (props) => {
  console.log(props.player);
  return props.player.length > 0 ? (
    <section className="mapa" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.mapa}</h3>
      <div className="players">
        {props.player.map((value) => (
          <Player
            agentName={value.getAgent.nome}
            agentFunction={value.getAgent.funcao}
            agentIcon={value.getAgent.icon}
            playerName={value.getName}
            playerPhoto={value.getPhoto}
          ></Player>
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Mapa;
