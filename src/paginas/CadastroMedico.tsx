import { Cabecalho } from "./Componentes/Cabecalho";
export const CadastroMedico = () => {
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
          <input type="text" className="form-control" id="inputNome4" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputCppj" className="form-label">
            CNPJ
          </label>
          <input type="text" className="form-control" id="inputCnpj" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputCrm" className="form-label">
            Número CRM
          </label>
          <input type="text" className="form-control" id="inputCrm" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputCrmEstado" className="form-label">
            Estado CRM
          </label>
          <input type="text" className="form-control" id="inputCrmEstado" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputEspecialidade" className="form-label">
            Especialidade
          </label>
          <input type="text" className="form-control" id="inputEspecialidade" />
        </div>

        <div className="col-2">
          <label htmlFor="inputNumeroSala" className="form-label">
            Número Sala
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNumeroSala"
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

        <div className="col-2">
          <label htmlFor="inputDataDisponivel" className="form-label">
            Data Disponível
          </label>
          <input
            type="text"
            className="form-control"
            id="inputDataDisponivel"
            placeholder="Logradouro, Número e Complemento"
          />
        </div>

        <div className="col-3">
          <label htmlFor="inputHoraDisponivelInicial" className="form-label">
            Hora Disponível Inicial
          </label>
          <input
            type="text"
            className="form-control"
            id="inputHoraDisponivelInicial"
            placeholder="Logradouro, Número e Complemento"
          />
        </div>

        <div className="col-3">
          <label htmlFor="inputHoraDisponivelFinal" className="form-label">
            Hora Disponível Final
          </label>
          <input
            type="text"
            className="form-control"
            id="inputHoraDisponivelFinal"
            placeholder="Logradouro, Número e Complemento"
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="inputValorConsulta" className="form-label">
            Valor Consulta
          </label>
          <input type="text" className="form-control" id="inputValorConsulta" />
        </div>
        <div className="col-md-2" />

        <div className="col-12">
          <button id="btncontato" className="btn btn-info rounded-pill px-3">
            Registrar
          </button>
        </div>
      </form>
    </>
  );
};
