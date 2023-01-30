import Colaborador from "../Colaborador";
import "./Times.css";

const Times = props => {
    console.log(props.colaboradores.length);
  return (
    props.colaboradores.length > 0 && <section className="times" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.titulo}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corPrimaria={props.corPrimaria}
            ></Colaborador>
          ))}
        </div>
    </section>
  )
}

export default Times;
