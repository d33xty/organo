import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrarNovoColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    console.log("formulario", nome, cargo, imagem, time);
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          aoAlterado={(valor) => setNome(valor)}
        ></CampoTexto>
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        ></CampoTexto>
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        ></CampoTexto>
        <ListaSuspensa
          itens={props.times}
          label="Time"
          value={time}
          aoAlterado={(valor) => setTime(valor)}
        ></ListaSuspensa>
        <Botao texto="Criar card"></Botao>
      </form>
    </section>
  );
};

export default Formulario;
