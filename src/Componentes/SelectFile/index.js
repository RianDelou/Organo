import "./SelectFile.css";
import React from "react";

const SelectFile = (props) => {
  return (
    <div className="select-file">
      <label>{props.label}</label>
      <input
        required={props.required}
        type="file"
        onChange={props.handleChange}
        ref={props.inputRef}
        id="file-input"
        accept="image/png, image/gif, image/jpeg"
      />
      <label htmlFor="file-input" className="custom-file-input">
        Escolher Foto
      </label>
      {props.value && (
        <img src={props.value} alt="imagem que você escolheu"></img>
      )}
    </div>
  );
};

export default SelectFile;
