import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Drawer from "./components/Drawer";

const NovoCliente = props => {
  return (
    <div>
      <p>Novo Cliente</p>
    </div>
  );
};
const ListaClientes = props => {
  return (
    <div>
      <p>Clientes</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Drawer>
            <Route path="/" exact component={ListaClientes} />
            <Route path="/novoCliente" component={NovoCliente} />
          </Drawer>
        </div>
      </Router>
    );
  }
}

export default App;
