import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";

export const Medico = function () {
  const navigate = useNavigate();
  const [listaMedicos, setListaMedicos] = useState([
    {
      nomeMedico: "Hellry",
      dataNascimento: new Date(2022, 3, 27),
      idMedico: 1,
      idade: 76,
    },
    {
      nomeMedico: "Lucas",
      dataNascimento: new Date(2022, 6, 27),
      idMedico: 2,
    },
  ]);
  const encaminharParaCadastro = (idMedico?: number) => {
    return navigate("/CadastroMedico?" + idMedico);
  };
  return (
    <>
      <Cabecalho nomeTela="Dados Médico"></Cabecalho>
      <button onClick={() => encaminharParaCadastro()}> Novo</button>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome Médico</th>
            <th>Data de Nascimento</th>
            <th>Alterar</th>
            <th>Excluir Médico</th>
          </tr>
        </thead>
        <tbody>
          {listaMedicos.map(function (Medico) {
            return (
              <tr>
                <td>{Medico.nomeMedico}</td>
                <td>{Medico.dataNascimento.toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() => encaminharParaCadastro(Medico.idMedico)}
                  >
                    Alterar
                  </button>
                </td>
                <td>
                  <button>Excluir Médico</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
