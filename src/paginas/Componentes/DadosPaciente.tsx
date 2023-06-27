export const DadosPaciente = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="inputNomel4" className="form-label">
            Nome completo
          </label>
          <input type="nome" className="form-control" id="inputNome4" />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputCpf4" className="form-label">
            CPF
          </label>
          <input type="cpf" className="form-control" id="inputCpf4" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputRg" className="form-label">
            RG
          </label>
          <input type="rg" className="form-control" id="inputRg" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputDn" className="form-label">
            Data de Nascimento
          </label>
          <input type="dn" className="form-control" id="inputDn" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputPassaporte" className="form-label">
            Passaporte
          </label>
          <input type="text" className="form-control" id="inputPassaporte" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputGenero" className="form-label">
            Genero
          </label>
          <input type="text" className="form-control" id="inputGenero" />
        </div>

        <div className="col-4">
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

        <div className="col-md-4">
          <label htmlFor="inputNomeResponsavel" className="form-label">
            Nome Responsável
          </label>
          <input
            type="text"
            className="form-control"
            id="inputNomeResponsavel"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputCpfResponsavel" className="form-label">
            CPF Responsável
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCpfResponsavel"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputplanoSaude" className="form-label">
            Plano de Saúde
          </label>
          <select id="inputplanoSaude" className="form-select">
            <option selected>Selecionar...</option>
            <option>São Camilo</option>
            <option>Unimed Fortaleza</option>
            <option>Bradesco Saúde</option>
            <option>Camed</option>
            <option>Famed</option>
            <option>Cassi</option>
            <option>Life</option>
            <option>Issec</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputnumPlano" className="form-label">
            Número Plano
          </label>
          <input type="text" className="form-control" id="inputnumPlano" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputvalidadePlano" className="form-label">
            Validade do Plano
          </label>
          <input type="text" className="form-control" id="inputvalidadePlano" />
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
      </form>
    </>
  );
};
