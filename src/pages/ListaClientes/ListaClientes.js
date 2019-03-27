import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../../App.css";

const ListaClientes = props => {
  const listaClientes = props.clientes || [];
  console.log("==", props);
  return listaClientes.map((cliente, index) => (
    <div key={index}>
      <Link to={`/cliente/${index}`} className="listaCliente">
        Cliente {cliente.nome}
      </Link>
      <ul />
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
