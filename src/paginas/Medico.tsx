import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cabecalho } from "./Componentes/Cabecalho";
import { Service } from "../Service";
import { IMedico } from "../Models/IMedico";

export const Medico = function () {
  const navigate = useNavigate();
  const [listaMedicos, setListaMedicos] = useState<IMedico[]>([]);
  const encaminharParaCadastro = (infoMedico?: IMedico) => {
    return navigate("/CadastroMedico?", {
      state: { ...infoMedico, senha: undefined },
    });
  };

  useEffect(() => {
    document.title = "Dados Médico";
    Service.getMedicos().then((res) => {
      setListaMedicos(res.data);
    });
  }, []);

  const apagar = (idMedico?: Number) => {
    if (window.confirm("Deseja realmente deletar este médico? " + idMedico)) {
      Service.deleteMedicos(idMedico)
        .then(() => {
          window.alert("Excluido com sucesso");
          Service.getMedicos().then((res) => {
            setListaMedicos(res.data);
          });
        })
        .catch((err) =>
          window.alert("Erro:" + JSON.stringify(err?.response?.data))
        );
    }
  };

  return (
    <>
      <Cabecalho nomeTela="Dados Médico"></Cabecalho>
      <button onClick={() => encaminharParaCadastro()}> Novo</button>
      <button onClick={() => encaminharParaCadastro()}> Pesquisar</button>
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
              <tr key={Medico.id}>
                <td>{Medico.nome}</td>
                <td>{Medico.crm_num}</td>
                <td>
                  <button onClick={() => encaminharParaCadastro(Medico)}>
                    Alterar
                  </button>
                </td>
                <td>
                  <button onClick={() => apagar(Medico.id)}>
                    Excluir Médico
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
