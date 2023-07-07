import axios from "axios";
import { IPaciente } from "./Models/IPaciente";
import { IMedico } from "./Models/IMedico";
import { IFuncionario } from "./Models/IFuncionario";
import { IProntuario } from "./Models/IProntuario";
import { IConsulta } from "./Models/IConsulta";

export const Service = {
  api: () =>
    axios.create({
      baseURL: "/api/",
      auth: {
        username: sessionStorage.getItem("Usuario") ?? "",
        password: sessionStorage.getItem("Senha") ?? "",
      },
    }),
  getNanana: () => {
    return Service.api().get("/posts");
  },
  getMedicos: () => {
    return Service.api().get("/medico/dados?nome=");
  },
  getFuncionarios: () => {
    return Service.api().get("/funcionario/dados");
  },
  getFuncionariosPorNome: (nome: string) => {
    return Service.api().get("/funcionario/dados?nome=" + nome);
  },
  getPacientes: () => {
    return Service.api().get("/paciente/dados");
  },

  PostPacientes: (paciente: IPaciente) => {
    return Service.api().post("/paciente", paciente);
  },

  PostMedicos: (medico: IMedico) => {
    return Service.api().post("/medico", medico);
  },

  PostFuncionarios: (funcionario: IFuncionario) => {
    return Service.api().post("/funcionario", funcionario);
  },

  deletePacientes: (idPaciente?: Number) => {
    return Service.api().delete("paciente?id_paciente=" + idPaciente);
  },

  deleteMedicos: (idMedico?: Number) => {
    return Service.api().delete("/medico?id_medico=" + idMedico);
  },

  deleteFuncionarios: (idFuncionario?: Number) => {
    return Service.api().delete("/funcionario?id_funcionario=" + idFuncionario);
  },

  PutPacientes: (paciente: IPaciente) => {
    return Service.api().put("paciente?id_paciente=" + paciente.id, paciente);
  },

  PutMedicos: (medico: IMedico) => {
    return Service.api().put("/medico?id_medico=" + medico.id, medico);
  },

  PutFuncionarios: (funcionario: IFuncionario) => {
    return Service.api().put(
      "/funcionario?id_funcionario=" + funcionario.id,
      funcionario
    );
  },

  getProntuario: () => {
    return Service.api().get("/prontuario/paciente");
  },

  PostProntuario: (prontuario: IProntuario) => {
    return Service.api().post(
      "/prontuario?id_consulta=" + prontuario.id_prontuario,
      prontuario,
      { headers: { "Content-type": "multipart/form-data" } }
    );
  },

  PutConsulta: (consulta: IConsulta) => {
    return Service.api().put(
      "consulta?id_consulta=" + consulta.id_consulta,
      consulta
    );
  },

  PostConsulta: (consulta: IConsulta) => {
    return Service.api().post("/consulta", consulta);
  },

  getConsulta: () => {
    return Service.api().get("/consulta/lista?data=05-07-2023");
  },

  getConsultaAtendimento: () => {
    return Service.api().get("consulta/atendimento?data=");
  },

  getConsultaLista: () => {
    return Service.api().get("consulta/lista?nome=bruno&data=15/06/2023");
  },

  getConsultaDia: () => {
    return Service.api().get("/consulta/dia?data=2023-07-06");
  },

  getConsultaConfirmacao: (consulta: IConsulta) => {
    return Service.api().get("consulta/confirmacao?data=");
  },

  getMyUsuario: () => {
    return Service.api().get("/my/usuario");
  },

  deleteConsulta: (consulta?: IConsulta) => {
    return Service.api().delete(
      "/consulta?id_consulta=" + consulta?.id_consulta
    );
  },
};
