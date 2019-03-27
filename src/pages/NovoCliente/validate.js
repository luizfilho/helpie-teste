export default values => {
  const errors = {};
  if (!values.nome) {
    errors.nome = "Nome Obrigátorio!";
  }
  if (!values.sobrenome) {
    errors.sobrenome = "Sobrenome Obrigátorio!";
  }
  if (!values.email) {
    errors.email = "E-mail Obrigátorio!";
  }
  if (!values.telefone) {
    errors.telefone = "Telefone Obrigátorio!";
  }
  if (!values.cep) {
    errors.cep = "Cep Obrigátorio!";
  }
  if (!values.endereco1) {
    errors.endereco1 = "Um endereço Obrigátorio!";
  }
  if (!values.endereco2) {
    errors.endereco2 = "Outra opção de endereço Obrigátorio!";
  }
  if (!values.dataNascimento) {
    errors.dataNascimento = "Data de Nascimento Obrigátoria!";
  }
  if (!values.cpf) {
    errors.cpf = "Cpf Obrigátorio!";
  }
  if (!values.rendaMensal) {
    errors.rendaMensal = "Renda Mensal Obrigátorio!";
  }
  return errors;
};
