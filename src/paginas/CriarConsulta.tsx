import { DadosConsulta } from "./Componentes/DadosConsulta";
import { Cabecalho } from "./Componentes/Cabecalho";

import { useEffect, useState } from "react";
import { IConsulta } from "../Models/IConsulta";
import { useLocation } from "react-router-dom";
import { Service } from "../Service";

export const CriarConsulta = () => {
  const location = useLocation();
  const [consulta, setConsulta] = useState<IConsulta>();

  useEffect(() => {
    setConsulta(location.state);
  }, []);

  const onConsultaChange = (newConsulta: IConsulta) => {
    setConsulta(newConsulta);
  };

  const validate = () => {
    if (
      consulta?.nome_funcionario == "" ||
      consulta?.nome_funcionario == null
    ) {
      window.alert("O campo nome do funcionário é obrigatório");
      return false;
    }

    if (consulta?.nome_medico == "" || consulta?.nome_medico == null) {
      window.alert("O campo nome do médico é obrigatório");
      return false;
    }

    if (consulta?.nome_paciente == "" || consulta?.nome_paciente == null) {
      window.alert("O campo nome do paciente é obrigatório");
      return false;
    }

    if (consulta?.data_consulta == null) {
      window.alert("O campo data de consulta é obrigatório");
      return false;
    }

    if (consulta?.hora_consulta == "" || consulta?.hora_consulta == null) {
      window.alert("O campo hora é obrigatório");
      return false;
    }

    if (consulta?.retorno_consulta == null) {
      window.alert("O campo retorno consulta é obrigatório");
      return false;
    }

    return true;
  };

  const registrar = () => {
    if (
      consulta &&
      validate() &&
      window.confirm(
        "Deseja realmente cadastrar esta consulta? " + JSON.stringify(consulta)
      )
    ) {
      if (consulta?.id_consulta ?? 0 > 0) {
        Service.PutConsulta(consulta)
          .then(() => window.alert("Atualiazado com sucesso"))
          .catch((err) =>
            window.alert("Erro:" + JSON.stringify(err?.response?.data))
          );
      } else {
        Service.PostConsulta({
          ...consulta,
        })
          .then(() => window.alert("Cadastrado com sucesso"))
          .catch((err) =>
            window.alert("Erro:" + JSON.stringify(err?.response?.data))
          );
      }
    }
  };
  return (
    <>
      <Cabecalho nomeTela="Criar Consulta"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Criar Consulta</h1>
      </div>
      <DadosConsulta
        onConsultaChange={onConsultaChange}
        consulta={consulta}
      ></DadosConsulta>
      <div className="col-12">
        <button
          id="btncontato"
          className="btn btn-info rounded-pill px-3"
          onClick={registrar}
        >
          Registrar
        </button>
      </div>
    </>
  );
};
