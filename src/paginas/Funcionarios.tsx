import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import "./Css/Funcionarios.css";
import { Service } from "../Service";
import { IFuncionario } from "../Models/IFuncionario";

const Funcionarios = function () {
  const navigate = useNavigate();
  const location = useLocation();
  const [listaFuncionarios, setListaFuncionarios] = useState<IFuncionario[]>(
    []
  );
  const [nomePesquisado, setNomePesquisado] = useState<string>("");

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

  /*const encaminharParaCadastroPorNome = (nomeFuncionario?: string) => {
    return navigate("/CadastroFuncionario?", {
      state: { nome: nomeFuncionario },
    });
  };*/

  const encaminharParaCadastroPorNome = async (nome: string) => {
    try {
      const response = await Service.getFuncionariosPorNome(nome);
      const dadosFuncionario = response.data;

      return navigate("/CadastroFuncionario", {
        state: { dadosFuncionario, senha: undefined },
      });
    } catch (error) {
      console.log("Erro ao consultar funcionário:", error);
    }
  };

  useEffect(() => {
    const nome = new URLSearchParams(location.search).get("nome");
    if (nome) {
      setNomePesquisado(nome);
      Service.getFuncionariosPorNome(nome).then((res) => {
        setListaFuncionarios(res.data);
      });
    }
  }, [location.search]);

  const handlePesquisarPorNome = () => {
    navigate("/CadastroFuncionario?nome=${nomePesquisado}");
  };

  const apagar = (Idfuncionario?: Number) => {
    if (
      window.confirm(
        "Deseja realmente deletar este Funcionário? " + Idfuncionario
      )
    ) {
      Service.deleteFuncionarios(Idfuncionario)
        .then(() => {
          window.alert("Excluido com sucesso");
          window.location.reload();
        })
        .catch((err) =>
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        );
    }
  };

  return (
    <>
      <Cabecalho nomeTela="Dados Funcionários"></Cabecalho>

      <div className="row">
        <div className="col-md-3">
          <button onClick={() => encaminharParaCadastro()}>
            {" "}
            Novo Cadastro
          </button>
        </div>
        <div className="col-md-3">
          <label htmlFor="nome">Nome do Funcionário</label>
          <input
            id="nome"
            type="text"
            value={nomePesquisado}
            onChange={(e) => setNomePesquisado(e.target.value)}
          />
          <button onClick={handlePesquisarPorNome}>Pesquisar</button>
        </div>
      </div>

      <br></br>

      <table border={1}>
        <thead>
          <tr>
            <th>Nome Funcionário</th>
            <th>Consultar dados</th>
            <th>Alterar Funcionário</th>
            <th>Excluir Funcionário</th>
          </tr>
        </thead>

        <tbody>
          {listaFuncionarios.map(function (funcionario) {
            return (
              <tr key={funcionario.id}>
                <td>{funcionario.nome}</td>
                <td>
                  <button
                    onClick={() =>
                      encaminharParaCadastroPorNome(funcionario.nome)
                    }
                  >
                    Consultar
                  </button>
                </td>
                <td>
                  <button onClick={() => encaminharParaCadastro(funcionario)}>
                    Alterar
                  </button>
                </td>
                <td>
                  <button onClick={() => apagar(funcionario?.id)}>
                    Excluir
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
