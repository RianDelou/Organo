import "./Player.css";

const Player = (props) => {
  return props.withPlayer ? (
    <div className="player">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.playerPhoto} alt={props.playerName}></img>
        <img src={props.agentIcon} alt={props.agentName}></img>
      </div>
      <div className="rodape">
        <h4>
          {props.playerName} / {props.agentName}
        </h4>
        <h5>{props.agentFunction}</h5>
      </div>
    </div>
  ) : (
    <div className="player">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src="./imagens/withoutPlayer.png" alt="Sem Player"></img>
      </div>
      <div className="rodape">
        <h4>Nenhum jogador adicionado</h4>
        <h5>Crie a comp desse mapa!</h5>
      </div>
    </div>
  );
};

export default Player;
