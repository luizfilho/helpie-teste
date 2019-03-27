import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Drawer from "./components/Drawer";
import ListaClients from "./pages/listaClientes/listaClientes";
import NovoClienteForm from "./pages/novoCliente/NovoClienteForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Drawer>
            <Route path="/" exact component={ListaClients} />
            <Route path="/novoCliente" component={NovoClienteForm} />
          </Drawer>
        </div>
      </Router>
    );
  }
}

export default App;
