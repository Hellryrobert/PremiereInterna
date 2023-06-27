import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";

export const Paciente = function () {
  const navigate = useNavigate();
  const [listaPacientes, setListaPacientes] = useState([
    {
      nomePaciente: "Hellry",
      dataNascimento: new Date(2022, 3, 27),
      idPaciente: 1,
      idade: 76,
    },
    {
      nomePaciente: "Lucas",
      dataNascimento: new Date(2022, 6, 27),
      idPaciente: 2,
    },
  ]);
  const encaminharParaCadastro = (idPaciente?: number) => {
    return navigate("/CadastroPaciente?" + idPaciente);
  };
  return (
    <>
      <Cabecalho nomeTela="Dados do Paciente"></Cabecalho>
      <button onClick={() => encaminharParaCadastro()}> Novo</button>
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
                <td>{Paciente.nomePaciente}</td>
                <td>{Paciente.dataNascimento.toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => encaminharParaCadastro(Paciente.idPaciente)}
                  >
                    Alterar
                  </button>
                </td>
                <td>
                  <button>Excluir Paciente</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
