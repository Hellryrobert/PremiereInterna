import { DadosPaciente } from "./Componentes/DadosPaciente";
import "./Css/CadastroPaciente.css";
import { Cabecalho } from "./Componentes/Cabecalho";

export const CadastroPaciente = () => {
  return (
    <>
      <Cabecalho nomeTela="Dados Pacientes"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Cadastro do Paciente</h1>
      </div>
      <DadosPaciente></DadosPaciente>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </div>
    </>
  );
};
