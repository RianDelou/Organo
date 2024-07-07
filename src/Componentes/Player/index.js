import "./Player.css";

const Player = (props) => {

  const handleClickRemove = () => {
    props.onRemove(props.playerName); // estou removendo de acordo com o nome mas o ideal seria o ID
  }

  return props.withPlayer ? (
    <div className="player">
      <div className="cabecalho" style={{ backgroundColor: props.corDeFundo }}>
        <img src={props.playerPhoto} alt={props.playerName}></img>
        <img src={props.agentIcon} alt={props.agentName}></img>
        <button onClick={handleClickRemove}><img src="./imagens/buttonRemove.png" alt="Clique para remover"></img></button>
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
