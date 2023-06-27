export const DadosConsulta = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNomel4" className="form-label">
            Especialidade
          </label>
          <select id="inputplanoSaude" className="form-select">
            <option selected>Selecionar...</option>
            <option>Cardiologista</option>
            <option>Dermatologista</option>
            <option>Ginecologista</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCpf4" className="form-label">
            Médico
          </label>
          <select id="inputplanoSaude" className="form-select">
            <option selected>Selecionar...</option>
            <option>Dr. Diego Santos</option>
            <option>Dr. Fernandes Mendes</option>
            <option>Dra. Mirla Coutinho</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputRg" className="form-label">
            Paciente
          </label>
          <input type="text" className="form-control" id="inputRg" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputDn" className="form-label">
            Data da Consulta
          </label>
          <input type="date" className="form-control" id="inputDn" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputPassaporte" className="form-label">
            Horário da Consulta
          </label>
          <input type="text" className="form-control" id="inputPassaporte" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputGenero" className="form-label">
            Retorno Consulta
          </label>
          <input type="text" className="form-control" id="inputGenero" />
        </div>

        <div className="col-md-2">
          <div>
            <label htmlFor="inputplanoSaude" className="form-label">
              Convênios
            </label>
            <select id="inputplanoSaude" className="form-select">
              <option selected>Selecionar...</option>
              <option>São Camilo</option>
              <option>Unimed Fortaleza</option>
              <option>Bradesco</option>
              <option>Camed</option>
              <option>Famed</option>
              <option>Cassi</option>
              <option>Life</option>
              <option>Issec</option>
            </select>
          </div>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputValor" className="form-label">
            Valor da Consulta
          </label>
          <input type="number" className="form-control" id="inputValor" />
        </div>
      </form>
    </>
  );
};
