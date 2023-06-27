import { Cabecalho } from "./Componentes/Cabecalho";
import "./Css/CadastroFuncionario.css";
export const CadastroFuncionario = () => {
  return (
    <>
      <Cabecalho nomeTela="Dados Funcionários"></Cabecalho>
      <div className="col-12 navegacao">
        <h1>Cadastro do Funcionário</h1>
      </div>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNomel4" className="form-label">
            Nome completo
          </label>
          <input type="nome" className="form-control" id="inputNome4" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputCpf4" className="form-label">
            CPF
          </label>

          <input
            className="CPF"
            type="text"
            pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
            title="Digite um CPF válido no formato xxx.xxx.xxx-xx"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputRg" className="form-label">
            RG
          </label>

          <input
            type="text"
            pattern="\d{2}\.\d{3}\.\d{3}-\w{1}"
            title="Digite um RG válido no formato xx.xxx.xxx-x"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputDn" className="form-label">
            Data de Nascimento
          </label>

          <input
            type="date"
            pattern="\d{2}/\d{2}/\d{4}"
            title="Digite uma data no formato dd/mm/aaaa"
          />
        </div>

        <div className="col-5">
          <label htmlFor="inputEmail" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="inputEmail"
            placeholder=""
          />
        </div>

        <div className="col-5">
          <label htmlFor="inputLogin" className="form-label">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLogin"
            placeholder=""
          />
        </div>

        <div className="col-2">
          <label htmlFor="inputSenha" className="form-label">
            Senha
          </label>
          <input
            type="text"
            className="form-control"
            id="inputSenha"
            placeholder=""
          />
        </div>

        <div className="col-8">
          <label htmlFor="inputAddress" className="form-label">
            Endereço
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Logradouro, Número e Complemento"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputCidade" className="form-label">
            Cidade
          </label>
          <input type="text" className="form-control" id="inputCidade" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputEstado" className="form-label">
            Estado
          </label>
          <select id="inputEstado" className="form-select">
            <option selected>Selecionar...</option>
            <option>AC</option>
            <option>AL</option>
            <option>AP</option>
            <option>AM</option>
            <option>BA</option>
            <option>CE</option>
            <option>DF</option>
            <option>ES</option>
            <option>GO</option>
            <option>MA</option>
            <option>MT</option>
            <option>MS</option>
            <option>MG</option>
            <option>PA</option>
            <option>PB</option>
            <option>PR</option>
            <option>PE</option>
            <option>PI</option>
            <option>RJ</option>
            <option>RN</option>
            <option>RS</option>
            <option>RO</option>
            <option>RR</option>
            <option>SC</option>
            <option>SP</option>
            <option>SE</option>
            <option>TO</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputCep" className="form-label">
            CEP
          </label>
          <input type="text" className="form-control" id="inputCep" />
        </div>
        <div className="col-md-3">
          <label htmlFor="inputBairro" className="form-label">
            Bairro
          </label>
          <input type="text" className="form-control" id="inputBairro" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputTel" className="form-label">
            Celular
          </label>
          <input type="text" className="form-control" id="inputTel" />
        </div>

        <div className="col-md-3">
          <label htmlFor="inputFunc" className="form-label">
            Função
          </label>
          <input type="text" className="form-control" id="inputFunc" />
        </div>

        <div className="col-12">
          <button id="btncontato" className="btn btn-info rounded-pill px-3">
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};
