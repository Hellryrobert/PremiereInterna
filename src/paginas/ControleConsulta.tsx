import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import "./Css/ControleConsulta.css";

export const ControleConsulta = function () {
  const navigate = useNavigate();
  const [listaConsulta, setListaControleConsulta] = useState([
    {
      nomePaciente: "Hellry",
      dataConsulta: new Date(2022, 3, 27),
      idConsulta: 1,
      idade: 76,
    },
    {
      nomePaciente: "Lucas",
      dataConsulta: new Date(2022, 6, 27),
      idConsulta: 2,
    },
  ]);
  const encaminharParaCriarConsulta = (idCriarConsulta?: number) => {
    return navigate("/CriarConsulta?" + idCriarConsulta);
  };

  const encaminharParaCancelarConsulta = (idCancelarConsulta?: number) => {
    if (window.confirm("Tem certeza que deseja cancelar?"))
      return navigate("/CancelarConsulta?" + idCancelarConsulta);
  };

  const encaminharParaRemarcarConsulta = (idRemarcarConsulta?: number) => {
    if (window.confirm("Tem certeza que deseja remarcar?"))
      return navigate("/RemarcarConsulta?" + idRemarcarConsulta);
  };

  const encaminharParaConfirmarConsulta = (idConfirmarConsulta?: number) => {
    if (window.confirm("Tem certeza que deseja confirmar?"))
      return navigate("/ConfirmarConsulta?" + idConfirmarConsulta);
  };

  return (
    <>
      <Cabecalho nomeTela="Controle de Consulta"></Cabecalho>
      <button onClick={() => encaminharParaCriarConsulta()}> Novo</button>

      <div className="row1">
        <div className="col-12">
          Selecione uma data:
          <input type="date" />
        </div>

        <div className="col-12">
          Selecione um Paciente:
          <input type="text" />
        </div>

        <div className="col-12">
          Pesquisar:
          <input type="text" />
        </div>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th>Nome Paciente</th>
            <th>Data da Consulta</th>
            <th>Alterar</th>
            <th>Excluir Consulta</th>
          </tr>
        </thead>
        <tbody>
          {listaConsulta.map(function (ControleConsulta) {
            return (
              <tr>
                <td>{ControleConsulta.nomePaciente}</td>
                <td>{ControleConsulta.dataConsulta.toLocaleDateString()}</td>

                <td>
                  <button onClick={() => encaminharParaRemarcarConsulta()}>
                    Remarcar Consulta
                  </button>
                </td>

                <td>
                  <button onClick={() => encaminharParaCancelarConsulta()}>
                    Cancelar Consulta
                  </button>
                </td>

                <td>
                  <button onClick={() => encaminharParaConfirmarConsulta()}>
                    Confirmar Consulta
                  </button>
                </td>

                <td>
                  <button>Abrir Atendimento</button>
                </td>

                <td>
                  <div className="ButtonAtendimento">
                    <button
                      id="btncontato"
                      className="btn btn-info rounded-pill px-3"
                    >
                      <a href="AbrirAtendimento">Abrir Atendimento</a>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
