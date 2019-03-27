import React from "react";
import { connect } from "react-redux";
import "../../App.css";

const Cliente = props => {
  const { clientes } = props;
  const id = props.match.params.id;
  console.log("1233", clientes);
  const cliente = clientes[id] || [];
  return (
    <div className="cliente">
      <ul>
        <li>Nome: {cliente.nome}</li>
        <li>Sobrenome: {cliente.sobrenome}</li>
        <li>E-mail: {cliente.email}</li>
        <li>Telefone: {cliente.telefone}</li>
        <li>CEP: {cliente.cep}</li>
        <li>Endereco 1: {cliente.endereco1}</li>
        <li>Endereço 2: {cliente.endereco2}</li>
        <li>Data de Nascimento: {cliente.dataNascimento}</li>
        <li>CPF: {cliente.cpf}</li>
        <li>Renda Mensal: R$ {cliente.rendaMensal}</li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  clientes: state.clientes.listaClientes
});
export default connect(
  mapStateToProps,
  null
)(Cliente);
