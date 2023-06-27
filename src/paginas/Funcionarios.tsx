import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import "./Css/Funcionarios.css";

const Funcionarios = function () {
  const navigate = useNavigate();
  const [listaFuncionarios, setListaFuncionarios] = useState([
    {
      nomeFuncionario: "Hellry",
      dataNascimento: new Date(2022, 3, 27),
      idFuncionaio: 1,
      idade: 76,
    },
    {
      nomeFuncionario: "Lucas",
      dataNascimento: new Date(2022, 6, 27),
      idFuncionaio: 2,
    },
  ]);
  const encaminharParaCadastro = (idFuncionario?: number) => {
    return navigate("/CadastroFuncionario?" + idFuncionario);
  };
  return (
    <>
      <Cabecalho nomeTela="Dados Funcionários"></Cabecalho>
      <div className=" NovoButton">
        <button onClick={() => encaminharParaCadastro()}> Novo</button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome Funcionário</th>
            <th>Data de Nascimento</th>
            <th>Alterar</th>
            <th>Excluir Funcionário</th>
          </tr>
        </thead>
        <tbody>
          {listaFuncionarios.map(function (funcionario) {
            return (
              <tr>
                <td>{funcionario.nomeFuncionario}</td>
                <td>{funcionario.dataNascimento.toLocaleDateString()}</td>
                <td>
                  <button
                    onClick={() =>
                      encaminharParaCadastro(funcionario.idFuncionaio)
                    }
                  >
                    Alterar
                  </button>
                </td>
                <td>
                  <button>Excluir Funcionário</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Funcionarios;
