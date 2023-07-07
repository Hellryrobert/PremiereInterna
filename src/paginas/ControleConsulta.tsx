import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import "./Css/ControleConsulta.css";
import { Service } from "../Service";
import { IConsulta } from "../Models/IConsulta";

export const ControleConsulta = function () {
  const navigate = useNavigate();
  const [listaConsulta, setListaControleConsulta] = useState<IConsulta[]>([]);

  useEffect(() => {
    document.title = "Controle Consulta";
    Service.getConsultaDia().then((res) => {
      setListaControleConsulta(
        res.data.map((consulta) => {
          return {
            ...consulta,
            data_consulta: new Date(consulta.data_consulta),
          };
        })
      );
    });
  }, []);

  const confirmar = (consulta?: IConsulta) => {
    if (window.confirm("Deseja realmente confirmar esta consulta? ")) {
      Service.getConsultaConfirmacao(consulta)
        .then(() => {
          window.alert("Confirmado com sucesso");
          Service.getMedicos().then((res) => {
            setListaMedicos(res.data);
          });
        })
        .catch((err) =>
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        );
    }
  };

  const apagar = (consulta?: IConsulta) => {
    if (window.confirm("Deseja realmente apagar esta consulta? ")) {
      Service.deleteConsulta(consulta)
        .then(() => {
          window.alert("Excluido com sucesso");
          Service.getConsultaDia().then((res) => {
            setListaControleConsulta(
              res.data.map(
                (consulta: { data_consulta: string | number | Date }) => {
                  return {
                    ...consulta,
                    data_consulta: new Date(consulta.data_consulta),
                  };
                }
              )
            );
          });
        })
        .catch((err) =>
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        );
    }
  };

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
      <button className="button1">
        <button onClick={() => encaminharParaCriarConsulta()}> Novo</button>
        <button onClick={() => encaminharParaCriarConsulta()}>
          {" "}
          Pesquisar
        </button>
        <button onClick={() => encaminharParaCriarConsulta()}>
          {" "}
          Confirmar
        </button>
        <button onClick={() => encaminharParaAtendimento()}>
          {" "}
          Abrir Atendimento
        </button>
      </button>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome Paciente</th>
            <th>Nome do Médico</th>
            <th>Data da Consulta</th>
            <th>Hora da Consulta</th>
            <th>Confirmar</th>
            <th>Cancelar </th>
          </tr>
        </thead>
        <tbody>
          {listaConsulta.map(function (ControleConsulta) {
            return (
              <tr key={ControleConsulta.id_consulta}>
                <td>{ControleConsulta.nome_paciente}</td>
                <td>{ControleConsulta.nome_medico}</td>
                <td>{ControleConsulta.data_consulta?.toLocaleDateString()}</td>
                <td>{ControleConsulta.hora_consulta}</td>
                <button onClick={() => encaminharParaConfirmarConsulta()}>
                  {" "}
                  Confirmar
                </button>
                <button onClick={() => apagar(ControleConsulta)}>
                  {" "}
                  Cancelarr
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
