import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { Cabecalho } from "./Componentes/Cabecalho";
import { IMedico } from "../Models/IMedico";
import { useLocation } from "react-router-dom";
import { Service } from "../Service";
export const CadastroMedico = () => {
  const location = useLocation();
  const [medico, setMedico] = useState<IMedico>();

  useEffect(() => {
    document.title = "Cadastro de Médico";
    setMedico(location.state);
  }, []);
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const objMedico = medico ?? {};

    const newValue = ev.target.value;
    const field = ev.target.name;

    const newObject = {
      ...objMedico,
      [field]: newValue,
    };

    setMedico(newObject);
  };

  const handleChangeTel = (event: any) => {
    const Tel = event.target.value.replace(/\D/g, "");
    const telWithMask = Tel.replace(
      /(\d{2})(9)(\d{4})(\d{4})/,
      "($1) $2 $3-$4"
    );
    const newValue = telWithMask;
    const field = event.target.name;

    const newObject = {
      ...medico,
      [field]: newValue,
    };

    setMedico(newObject);
    // Use cpfWithMask as needed (e.g., update state or perform further operations)
  };

  const handleChangeCNPJ = (event: any) => {
    const cnpj = event.target.value.replace(/\D/g, "");
    const cnpjWithMask = cnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
    const newValue = cnpjWithMask;
    const field = event.target.name;

    const newObject = {
      ...medico,
      [field]: newValue,
    };

    setMedico(newObject);
    // Use cpfWithMask as needed (e.g., update state or perform further operations)
  };

  const validate = () => {
    if (medico?.cnpj == "" || medico?.cnpj == null) {
      window.alert("O campo CNPJ é obrigatório");
      return false;
    }

    if (medico?.nome == "" || medico?.nome == null) {
      window.alert("O campo do nome é obrigatório");
      return false;
    }

    if (medico?.crm_estado == "" || medico?.crm_estado == null) {
      window.alert("O campo crm_estado é obrigatório");
      return false;
    }

    if (medico?.crm_num == "" || medico?.crm_num == null) {
      window.alert("O campo crm_num é obrigatório");
      return false;
    }

    if (medico?.telefone == "" || medico?.telefone == null) {
      window.alert("O campo do telefone é obrigatório");
      return false;
    }

    if (medico?.email == "" || medico?.email == null) {
      window.alert("O campo email é obrigatório");
      return false;
    }

    if (medico?.especialidade == "" || medico?.especialidade == null) {
      window.alert("O campo especialidade é obrigatório");
      return false;
    }

    if (medico?.sala == "" || medico?.sala == null) {
      window.alert("O campo sala é obrigatório");
      return false;
    }

    if (medico?.login == "" || medico?.login == null) {
      window.alert("O campo login é obrigatório");
      return false;
    }

    if (medico?.senha == "" || medico?.senha == null) {
      window.alert("O campo senha é obrigatório");
      return false;
    }

    if (medico?.diasDisponiveis == "" || medico?.diasDisponiveis == null) {
      window.alert("O campo dias disponíveis é obrigatório");
      return false;
    }

    if (medico?.hora_inicial == "" || medico?.hora_inicial == null) {
      window.alert("O campo hora inicial é obrigatório");
      return false;
    }

    if (medico?.hora_final == "" || medico?.hora_final == null) {
      window.alert("O campo hora final é obrigatório");
      return false;
    }

    if (medico?.valor_consulta == "" || medico?.valor_consulta == null) {
      window.alert("O campo valor consulta é obrigatório");
      return false;
    }
    return true;
  };

  const registrar = () => {
    if (
      medico &&
      validate() &&
      window.confirm(
        "Deseja realmente cadastrar este médico? " + JSON.stringify(medico)
      )
    ) {
      const postMedico = {
        ...medico,
        diasDisponiveis: Array.isArray(medico.diasDisponiveis)
          ? medico.diasDisponiveis
          : [medico.diasDisponiveis],
      };
      if (medico?.id ?? 0 > 0) {
        Service.PutMedicos(postMedico)
          .then(() => window.alert("Atualiazado com sucesso"))
          .catch((err) =>
            window.alert(
              err?.response?.data
                .map((error: { message: any }) => error.message)
                .join("\n")
            )
          );
      } else {
        Service.PostMedicos(postMedico)
          .then(() => window.alert("Cadastrado com sucesso"))
          .catch((err) =>
            window.alert(
              err?.response?.data
                .map((error: { message: any }) => error.message)
                .join("\n")
            )
          );
      }
    }
  };

  return (
    <>
      <Cabecalho nomeTela="Dados Médico"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Cadastro do Médico</h1>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNomel4" className="form-label">
            Nome completo
          </label>
          <input
            name="nome"
            type="text"
            className="form-control"
            id="inputNome4"
            value={medico?.nome}
            onChange={onChange}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputCnpj" className="form-label">
            CNPJ
          </label>
          <input
            name="cnpj"
            type="text"
            className="form-control"
            id="inputCnpj"
            value={medico?.cnpj}
            onChange={handleChangeCNPJ}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputCrm" className="form-label">
            Número CRM
          </label>
          <input
            name="crm_num"
            type="number"
            value={medico?.crm_num}
            className="form-control"
            id="inputCrm"
            onChange={onChange}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputCrmEstado" className="form-label">
            Estado CRM
          </label>
          <input
            name="crm_estado"
            type="text"
            value={medico?.crm_estado}
            className="form-control"
            id="inputCrmEstado"
            onChange={onChange}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputEspecialidade" className="form-label">
            Especialidade
          </label>
          <input
            name="especialidade"
            type="text"
            value={medico?.especialidade}
            className="form-control"
            id="inputEspecialidade"
            onChange={onChange}
          />
        </div>

        <div className="col-2">
          <label htmlFor="inputNumeroSala" className="form-label">
            Número Sala
          </label>
          <input
            name="sala"
            type="text"
            value={medico?.sala}
            className="form-control"
            id="inputNumeroSala"
            onChange={onChange}
          />
        </div>

        <div className="col-2">
          <label htmlFor="inputLogin" className="form-label">
            Login
          </label>
          <input
            name="login"
            type="text"
            value={medico?.login}
            className="form-control"
            id="inputLogin"
            onChange={onChange}
          />
        </div>

        <div className="col-2">
          <label htmlFor="inputelefone" className="form-label">
            Telefone
          </label>
          <input
            name="telefone"
            type="text"
            value={medico?.telefone}
            className="form-control"
            id="inputtelefone"
            onChange={handleChangeTel}
          />
        </div>

        <div className="col-4">
          <label htmlFor="inputemail" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={medico?.email}
            className="form-control"
            id="inputemail"
            onChange={onChange}
          />
        </div>

        <div className="col-2">
          <label htmlFor="inputSenha" className="form-label">
            Senha
          </label>
          <input
            name="senha"
            type="password"
            className="form-control"
            id="inputSenha"
            onChange={onChange}
          />
        </div>

        <div className="col-2">
          <label htmlFor="inputDiasDisponiveis" className="form-label">
            Dias Disponíveis
          </label>
          <input
            name="diasDisponiveis"
            type="text"
            value={medico?.diasDisponiveis}
            className="form-control"
            id="inputDiasDisponiveis"
            onChange={onChange}
          />
        </div>

        <div className="col-3">
          <label htmlFor="inputHoraDisponivelInicial" className="form-label">
            Hora Disponível Inicial{" "}
          </label>
          <input
            name="hora_inicial"
            type="time"
            step="1"
            className="form-control"
            id="inputHoraDisponivelInicial"
            onChange={onChange}
          />
        </div>

        <div className="col-3">
          <label htmlFor="inputHoraDisponivelFinal" className="form-label">
            Hora Disponível Final
          </label>
          <input
            name="hora_final"
            type="time"
            step="1"
            className="form-control"
            id="inputHoraDisponivelFinal"
            onChange={onChange}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputValorConsulta" className="form-label">
            Valor Consulta
          </label>
          <input
            name="valor_consulta"
            type="number"
            value={medico?.valor_consulta}
            className="form-control"
            id="inputValorConsulta"
            onChange={onChange}
          />
        </div>
        <div className="col-md-2" />

        <div className="col-12">
          <button
            id="btncontato"
            className="btn btn-info rounded-pill px-3"
            onClick={registrar}
            type="button"
          >
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};
