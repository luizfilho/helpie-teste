import React from "react";
import { connect } from "react-redux";

const ListaClientes = props => {
  const listaClientes = props.clientes || [];
  return listaClientes.map((cliente, index) => (
    <div key={index}>
      <h2>Cliente {index + 1}</h2>
      <ul>
        <li>Nome: {cliente.nome} </li>
        <li>Sobrenome: {cliente.sobrenome} </li>
        <li>E-mail: {cliente.email} </li>
        <li>Telefone: {cliente.telefone} </li>
        <li>Cep: {cliente.cep} </li>
        <li>Endereco1: {cliente.endereco1} </li>
        <li>Endereco2: {cliente.endereco2} </li>
        <li>Data da Nascimento: {cliente.dataNascimento} </li>
        <li>CPF: {cliente.cpf} </li>
        <li>RendaMensal: {cliente.rendaMensal} </li>
      </ul>
    </div>
  ));
};

const mapStateToProps = state => ({
  clientes: state.clientes.listaClientes
});
export default connect(
  mapStateToProps,
  null
)(ListaClientes);
