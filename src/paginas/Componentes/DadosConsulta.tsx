import { ChangeEvent, useEffect, useState } from "react";
import { IMedico } from "../../Models/IMedico";
import { Service } from "../../Service";
import { IPaciente } from "../../Models/IPaciente";
import { IConsulta } from "../../Models/IConsulta";
import { Paciente } from "../Paciente";
import { IFuncionario } from "../../Models/IFuncionario";
import Funcionarios from "../Funcionarios";
import { Medico } from "../Medico";

interface IPropriedades {
  consulta?: IConsulta;
  onConsultaChange?: (consulta: IConsulta) => void;
}

export const DadosConsulta: React.FC<IPropriedades> = ({
  consulta,
  onConsultaChange,
}) => {
  const [listaMedicos, setListaMedicos] = useState<IMedico[]>([]);
  const [listaPacientes, setListaPacientes] = useState<IPaciente[]>([]);
  const [listaFuncionarios, setListaFuncionarios] = useState<IFuncionario[]>(
    []
  );
  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const objConsulta = consulta ?? {};

    const newValue = ev.target.checked;
    const field = ev.target.name;

    const newObject = {
      ...objConsulta,
      [field]: newValue,
    };

    if (onConsultaChange) onConsultaChange(newObject);
  };

  useEffect(() => {
    Service.getMedicos().then((res) => {
      setListaMedicos(res.data);
    });

    Service.getPacientes().then((res) => {
      setListaPacientes(res.data);
    });

    Service.getFuncionarios().then((res) => {
      setListaFuncionarios(res.data);
    });
  }, []);

  const onChange = (
    ev: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    debugger;
    const objConsulta = consulta ?? {};

    const newValue = ev.target.value;
    const field = ev.target.name;

    const newObject = {
      ...objConsulta,
      [field]: newValue,
    };

    if (onConsultaChange) onConsultaChange(newObject);
  };

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputNomel4" className="form-label">
            Nome Funcionário
          </label>
          <select
            id="inputNomeFunc"
            name="nome_funcionario"
            onChange={onChange}
            className="form-select"
          >
            {listaFuncionarios.map((funcionario) => {
              return (
                <option value={funcionario.nome} key={funcionario.id}>
                  {funcionario.nome}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCpf4" className="form-label">
            Médico
          </label>
          <select
            id="inputplanoSaude"
            name="nome_medico"
            onChange={onChange}
            className="form-select"
          >
            {listaMedicos.map((medico) => {
              return (
                <option value={medico.nome} key={medico.id}>
                  {medico.nome}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-5">
          <label htmlFor="inputPaciente" className="form-label">
            Paciente
          </label>
          <select
            id="inputPaciente"
            name="nome_paciente"
            onChange={onChange}
            className="form-select"
          >
            {listaPacientes.map((paciente) => {
              return (
                <option value={paciente.nome} key={paciente.id}>
                  {paciente.nome}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="inputDn" className="form-label">
            Data da Consulta
          </label>
          <input
            type="date"
            name="data_consulta"
            onChange={onChange}
            className="form-control"
            id="inputDn"
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputPassaporte" className="form-label">
            Horário da Consulta
          </label>
          <input
            type="text"
            name="hora_consulta"
            onChange={onChange}
            className="form-control"
            id="inputPassaporte"
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="inputDn" className="form-label">
            Retorno da Consulta
          </label>
          <input
            type="checkbox"
            name="retorno_consulta"
            onChange={handleChange}
            className="form-control"
            id="inputDn"
          />
        </div>
      </form>
    </>
  );
};
function setIsChecked(checked: any) {
  throw new Error("Function not implemented.");
}
