import { DadosConsulta } from "./Componentes/DadosConsulta";
import { Cabecalho } from "./Componentes/Cabecalho";

export const CriarConsulta = () => {
  return (
    <>
      <Cabecalho nomeTela="Criar Consulta"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Criar Consulta</h1>
      </div>
      <DadosConsulta></DadosConsulta>
      <div className="col-12">
        <button id="btncontato" className="btn btn-info rounded-pill px-3">
          Registrar
        </button>
      </div>
    </>
  );
};
