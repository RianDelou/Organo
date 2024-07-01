import "./CampoTexto.css";

const CampoTexto = (props) => {

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        required={props.required}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.value}
      />
    </div>
  );
};

export default CampoTexto;
