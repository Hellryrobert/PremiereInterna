export interface IMedico {
  data_Nascimento: any;
  id: number;
  nome: string;
  cnpj: string;
  crm_estado: string;
  crm_num: string;
  telefone: string;
  email: string;
  especialidade: string;
  sala: string;
  login: string;
  diasDisponiveis: string[];
  hora_inicial: [number, number];
  hora_final: [number, number];
  valor_consulta: number;
}
