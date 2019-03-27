import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Drawer from "./components/Drawer";
import ListaClients from "./pages/ListaClientes/ListaClientes";
import NovoClienteForm from "./pages/NovoCliente";
import Cliente from "./pages/Cliente";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Drawer>
            <Route path="/" exact component={ListaClients} />
            <Route path="/novoCliente" component={NovoClienteForm} />
            <Route exatc path="/cliente/:id" component={Cliente} />
          </Drawer>
        </div>
      </Router>
    );
  }
}

export default App;
