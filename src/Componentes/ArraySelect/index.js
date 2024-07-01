import './ArraySelect.css'

const ArraySelect = (props) => {
  return (
    <div className="lista-mapas">
      <label>{props.label}</label>
      <select onChange={props.handleChange} value={props.value}  required={props.required}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};

export default ArraySelect;
