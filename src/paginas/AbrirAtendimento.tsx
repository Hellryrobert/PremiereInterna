import { Cabecalho } from "./Componentes/Cabecalho";
import { DadosConsulta } from "./Componentes/DadosConsulta";
import { CadastroPaciente } from "../paginas/CadastroPaciente";

export const AbrirAtendimento = () => {
  const encaminharParaConfirmarAtendimento = (
    idConfirmarAtendimento?: number
  ) => {
    if (
      window.confirm(
        "O médico será informado que o paciente está disponível para o atendimento. Você confirma?"
      )
    )
      return navigate("/ConfirmarAtendimento?" + idConfirmarAtendimento);
  };

  return (
    <>
      <Cabecalho nomeTela="Abrir Atendimento"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Abrir Atendimento</h1>
      </div>
      <CadastroPaciente></CadastroPaciente>
      <DadosConsulta></DadosConsulta>
      <div className="row">
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            Autorização Confirmada
          </button>
        </div>
        <div className="col-4">
          <button
            onClick={() => encaminharParaConfirmarAtendimento()}
            type="submit"
            className="btn btn-primary"
          >
            Pagamento Confirmado
          </button>
        </div>
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            Cancelar Consulta
          </button>
        </div>
      </div>
    </>
  );
};
