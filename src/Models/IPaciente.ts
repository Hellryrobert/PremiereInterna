export interface IPaciente {
  id?: number;
  nome?: string;
  cpf?: string;
  passaporte?: string;
  data_nascimento?: any;
  nome_responsavel?: string;
  cpf_responsavel?: string;
  genero?: string;
  endereco?: string;
  cep?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  telefone?: string;
  email?: string;
  plano_saude?: string;
  num_plano?: number;
  validade_plano?: any;
}
