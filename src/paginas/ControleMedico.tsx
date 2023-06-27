import { Cabecalho } from "./Componentes/Cabecalho";
import { Linha } from "./Componentes/Linha";

export const ControleMedico = () => {
  return (
    <>
      <Cabecalho nomeTela="Controle Médico"></Cabecalho>
      <div className="row">
        <div className="col-6">Nome Paciente</div>
        <div className="col-6">
          <input type="date" name="" id="" />
        </div>
      </div>
      <Linha></Linha>
      <Linha></Linha>
    </>
  );
};
