import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import "./Css/Funcionarios.css";
import { Service } from "../Service";
import { IFuncionario } from "../Models/IFuncionario";

const Funcionarios = function () {
  const navigate = useNavigate();
  const [listaFuncionarios, setListaFuncionarios] = useState<IFuncionario[]>(
    []
  );

  const encaminharParaCadastro = (infoFuncionario?: IFuncionario) => {
    return navigate("/CadastroFuncionario?", {
      state: infoFuncionario,
    });
  };

  useEffect(() => {
    Service.getFuncionarios().then((res) => {
      setListaFuncionarios(res.data);
    });
  });

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
                <td>{funcionario.nome}</td>
                <td>{funcionario.data_nascimento[0]}</td>
                <td>
                  <button onClick={() => encaminharParaCadastro(funcionario)}>
                    Alterar
                  </button>
                </td>
                <td>
                  <button>Excluir Funcionário</button>
                </td>
                <td>
                  <button>Pesquisar</button>
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
