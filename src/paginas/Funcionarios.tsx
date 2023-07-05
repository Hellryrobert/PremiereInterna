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
      state: { ...infoFuncionario, senha: undefined },
    });
  };

  useEffect(() => {
    document.title = "Dados Funcionário";
    Service.getFuncionarios().then((res) => {
      setListaFuncionarios(res.data);
    });
  }, []);

  const apagar = (Idfuncionario?: Number) => {
    if (
      window.confirm(
        "Deseja realmente deletar este Funcionário? " + Idfuncionario
      )
    ) {
      Service.deleteFuncionarios(Idfuncionario)
        .then(() => window.alert("Excluido com sucesso"))
        .catch((err) =>
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        );
    }
  };

  return (
    <>
      <Cabecalho nomeTela="Dados Funcionários"></Cabecalho>

      <button onClick={() => encaminharParaCadastro()}> Novo</button>

      <button onClick={() => encaminharParaCadastro()}> Pesquisar</button>

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
                <td>{funcionario.data_nascimento}</td>
                <td>
                  <button onClick={() => encaminharParaCadastro(funcionario)}>
                    Alterar
                  </button>
                </td>
                <td>
                  <button onClick={() => apagar(funcionario?.id)}>
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

export default Funcionarios;
