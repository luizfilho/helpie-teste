import * as actionsType from "../actionsTypes";

const INITIAL_STATE = {
  listaClientes: [
    {
      nome: "José1",
      sobrenome: "Carlos",
      email: "jose@gmail.com",
      telefone: "3331-6958",
      cep: "147852-888",
      endereco1: "rua do mouse, nº10",
      endereco2: "rua do teclado, nº22",
      dataNascimento: "21/05/1998",
      cpf: "281755328996",
      rendaMensal: "4520,00"
    },
    {
      nome: "José",
      sobrenome: "Carlos",
      email: "jose@gmail.com",
      telefone: "3331-6958",
      cep: "147852-888",
      endereco1: "rua do mouse, nº10",
      endereco2: "rua do teclado, nº22",
      dataNascimento: "21/05/1998",
      cpf: "281755328996",
      rendaMensal: "4520,00"
    }
  ]
};
function addClient(state, action) {
  console.log("action >>>>", action);
  const novaListaClientes = state.listaClientes.push(action.payload);
  console.log("novaListaClientes >>>>", novaListaClientes);

  return novaListaClientes;
}
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsType.ADD_CLIENTE:
      addClient(state, action);
    default:
      return state;
  }
};
