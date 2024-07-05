import Player from "../Player";
import "./Mapa.css";

const Mapa = (props) => {
  return props.player.length > 0 ? (
    <section className="mapa" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.mapa}</h3>
      <div className="players">
        {props.player.map((value) => (
          
          <Player
            corDeFundo={props.corSecundaria}
            key={value.getName}
            agentName={value.getAgent.nome}
            agentFunction={value.getAgent.funcao}
            agentIcon={value.getAgent.icon}
            playerName={value.getName}
            playerPhoto={value.getPhotoURL}
            withPlayer={true}
          ></Player>
        ))}
      </div>
    </section>
  ) : (
    <section className="mapa" style={{ backgroundColor: props.corPrimaria }}>
      <h3 style={{ borderColor: props.corSecundaria }}>{props.mapa}</h3>
      <div className="players">
          <Player
            withPlayer={false}
            corDeFundo={props.corSecundaria}
          ></Player>
      </div>
    </section>
  );
};

export default Mapa;
