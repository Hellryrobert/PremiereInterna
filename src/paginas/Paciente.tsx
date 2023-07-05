import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import { Service } from "../Service";
import { IPaciente } from "../Models/IPaciente";

export const Paciente = function () {
  const navigate = useNavigate();
  const [listaPacientes, setListaPacientes] = useState<IPaciente[]>([]);

  const encaminharParaCadastro = (infoPaciente?: IPaciente) => {
    return navigate("/CadastroPaciente?", {
      state: infoPaciente,
    });
  };

  useEffect(() => {
    document.title = "Dados Paciente";
    Service.getPacientes()
      .then((res) => {
        setListaPacientes(res.data);
      })
      .catch((err) => window.alert("Erro:" + JSON.stringify(err)));
  }, []);

  const apagar = (idPaciente?: Number) => {
    if (
      window.confirm("Deseja realmente deletar este paciente? " + idPaciente)
    ) {
      Service.deletePacientes(idPaciente)
        .then(() => window.alert("Excluido com sucesso"))
        .catch((err) =>
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        );
    }
  };

  return (
    <>
      <Cabecalho nomeTela="Dados do Paciente"></Cabecalho>
      <button onClick={() => encaminharParaCadastro()}> Novo</button>
      <button onClick={() => encaminharParaCadastro()}> Pesquisar</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome Paciente</th>
            <th>Data de Nascimento</th>
            <th>Alterar</th>
            <th>Excluir Paciente</th>
          </tr>
        </thead>

        <tbody>
          {listaPacientes.map(function (Paciente) {
            return (
              <tr>
                <td>{Paciente.nome}</td>
                <td>{Paciente.data_nascimento}</td>
                <td>
                  <button onClick={() => encaminharParaCadastro(Paciente)}>
                    Alterar
                  </button>
                </td>
                <td>
                  <button onClick={() => apagar(Paciente.id)}>
                    Excluir Funcionário
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
