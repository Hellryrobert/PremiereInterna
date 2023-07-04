import { DadosPaciente } from "./Componentes/DadosPaciente";
import "./Css/CadastroPaciente.css";
import { Cabecalho } from "./Componentes/Cabecalho";
import { IPaciente } from "../Models/IPaciente";
import { useEffect, useState } from "react";
import { json, useLocation } from "react-router-dom";
import { Service } from "../Service";
import moment from "moment";
import { Utils } from "../utils";

export const CadastroPaciente = () => {
  const location = useLocation();
  const [paciente, setPaciente] = useState<IPaciente>();

  useEffect(() => {
    document.title = "Cadastro de Paciente";
    setPaciente(location.state);
  }, []);

  const onPacienteChange = (newPaciente: IPaciente) => {
    setPaciente(newPaciente);
  };

  const validate = () => {
    if (paciente?.nome == "" || paciente?.nome == null) {
      window.alert("O campo nome é obrigatório");
      return false;
    }

    if (paciente?.cpf == "" || paciente?.cpf == null) {
      window.alert("O campo cpf é obrigatório");
      return false;
    }

    if (paciente?.passaporte == "" || paciente?.passaporte == null) {
      window.alert("O campo passaporte é obrigatório");
      return false;
    }

    if (paciente?.data_nascimento == "" || paciente?.data_nascimento == null) {
      window.alert("O campo data de nascimento é obrigatório");
      return false;
    }

    if (
      paciente?.nome_responsavel == "" ||
      paciente?.nome_responsavel == null
    ) {
      window.alert("O campo do nome do responsável é obrigatório");
      return false;
    }

    if (paciente?.cpf_responsavel == "" || paciente?.cpf_responsavel == null) {
      window.alert("O campo do cpf do responsável é obrigatório");
      return false;
    }

    if (paciente?.genero == "" || paciente?.genero == null) {
      window.alert("O campo do genero é obrigatório");
      return false;
    }

    if (paciente?.endereco == "" || paciente?.endereco == null) {
      window.alert("O campo endereço é obrigatório");
      return false;
    }

    if (paciente?.cep == "" || paciente?.cep == null) {
      window.alert("O campo cep é obrigatório");
      return false;
    }

    if (paciente?.bairro == "" || paciente?.bairro == null) {
      window.alert("O campo bairro é obrigatório");
      return false;
    }

    if (paciente?.cidade == "" || paciente?.cidade == null) {
      window.alert("O campo cidade é obrigatório");
      return false;
    }

    if (paciente?.estado == "" || paciente?.estado == null) {
      window.alert("O campo estado é obrigatório");
      return false;
    }

    if (paciente?.telefone == "" || paciente?.telefone == null) {
      window.alert("O campo telefone é obrigatório");
      return false;
    }

    if (paciente?.email == "" || paciente?.email == null) {
      window.alert("O campo email é obrigatório");
      return false;
    }

    if (paciente?.plano_saude == "" || paciente?.plano_saude == null) {
      window.alert("O campo plano de saude é obrigatório");
      return false;
    }

    if (paciente?.num_plano == 0 || paciente?.num_plano == null) {
      window.alert("O campo número do plano é obrigatório");
      return false;
    }

    if (paciente?.validade_plano == "" || paciente?.validade_plano == null) {
      window.alert("O campo validade do plano é obrigatório");
      return false;
    }

    return true;
  };

  const registrar = () => {
    if (
      paciente &&
      validate() &&
      window.confirm(
        "Deseja realmente cadastrar este paciente? " + JSON.stringify(paciente)
      )
    ) {
      const p1 = {
        ...paciente,
        data_nascimento: moment(paciente.data_nascimento).format("DD/MM/YYYY"),
        validade_plano: moment(paciente.validade_plano).format("DD/MM/YYYY"),
      };
      if (paciente?.id ?? 0 > 0) {
        Service.PutPacientes(p1)
          .then(() => window.alert("Atualiazado com sucesso"))
          .catch((err) => Utils.displayErrorMessage(err));
      } else {
        Service.PostPacientes(p1)
          .then(() => window.alert("Cadastrado com sucesso"))
          .catch((err) => Utils.displayErrorMessage(err));
      }
    }
  };

  return (
    <>
      <Cabecalho nomeTela="Dados Pacientes"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Cadastro do Paciente</h1>
      </div>
      <DadosPaciente
        onPacienteChange={onPacienteChange}
        paciente={paciente}
      ></DadosPaciente>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={registrar}>
          Registrar
        </button>
      </div>
    </>
  );
};
