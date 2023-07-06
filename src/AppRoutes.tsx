import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./paginas/Login";
import { PaginaMedico } from "./paginas/PaginaMedico";
import { ControleMedico } from "./paginas/ControleMedico";
import { CadastroProntuario } from "./paginas/CadastroProntuario";
import { CadastroPaciente } from "./paginas/CadastroPaciente";
import { CadastroFuncionario } from "./paginas/CadastroFuncionario";
import { CadastroMedico } from "./paginas/CadastroMedico";
import { CriarConsulta } from "./paginas/CriarConsulta";
import { Admin } from "./paginas/Admin";
import Funcionarios from "./paginas/Funcionarios";
import { Medico } from "./paginas/Medico";
import { Paciente } from "./paginas/Paciente";
import { ControleConsulta } from "./paginas/ControleConsulta";
import { AbrirAtendimento } from "./paginas/AbrirAtendimento";
import { Recepcionista } from "./paginas/Recepcionista";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Login} path="/" />
        <Route Component={PaginaMedico} path="/PaginaMedico" />
        <Route Component={ControleMedico} path="/ControleMedico" />
        <Route Component={CadastroProntuario} path="/CadastroProntuario" />
        <Route Component={CadastroPaciente} path="/CadastroPaciente" />
        <Route Component={CadastroFuncionario} path="/CadastroFuncionario" />
        <Route Component={CadastroMedico} path="/CadastroMedico" />
        <Route Component={CriarConsulta} path="/CriarConsulta" />
        <Route Component={Funcionarios} path="/Funcionarios" />
        <Route Component={Medico} path="/Medico" />
        <Route Component={Paciente} path="/Paciente" />
        <Route Component={Admin} path="/Admin" />
        <Route Component={ControleConsulta} path="/ControleConsulta" />
        <Route Component={AbrirAtendimento} path="/AbrirAtendimento" />
        <Route Component={Recepcionista} path="/Recepcionista" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
