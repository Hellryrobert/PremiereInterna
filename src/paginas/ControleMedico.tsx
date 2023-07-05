import { useEffect, useState } from "react";
import { Cabecalho } from "./Componentes/Cabecalho";
import { Linha } from "./Componentes/Linha";
import { useNavigate } from "react-router-dom";
import { Service } from "../Service";
import { IConsulta } from "../Models/IConsulta";

export const ControleMedico = () => {
  const navigate = useNavigate();
  const [listaConsulta, setListaControleConsulta] = useState<IConsulta[]>([]);
  useEffect(() => {
    document.title = "Controle Médico";
    Service.getConsultaLista().then((res) => {
      setListaControleConsulta(res.data);
    });
  }, []);
  return (
    <>
      <Cabecalho nomeTela="Controle Médico"></Cabecalho>
      <table border={1}>
        <thead>
          <tr>
            <th>Nome Paciente</th>
            <th>Hora da Consulta</th>
            <th>Confirmar</th>
          </tr>
        </thead>
        <tbody>
          {listaConsulta.map(function (ControleConsulta) {
            return (
              <tr key={ControleConsulta.id_consulta}>
                <td>{ControleConsulta.nome_paciente}</td>

                <td>{ControleConsulta.hora_consulta}</td>
                <button>Confirmar</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
