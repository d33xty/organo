import "./CampoTexto.css";

const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        placeholder={props.placeholder}
        required={true}
      ></input>
    </div>
  );
};

export default CampoTexto;
