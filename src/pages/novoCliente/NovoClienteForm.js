import React from "react";
import { Field } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import * as actions from "../../store/actions";

import "../../App.css";
const pagesForm = [
  {
    page: 1,
    inputs: {
      nome: { name: "nome", type: "text", label: "Nome" },
      sobrenome: { name: "sobrenome", type: "text", label: "Sobrenome" },
      email: { name: "email", type: "email", label: "E-mail" },
      telefone: { name: "telefone", type: "email", label: "Telefone" }
    }
  },
  {
    page: 2,
    inputs: {
      cep: { name: "cep", type: "text", label: "Cep" },
      endereco1: { name: "endereco1", type: "text", label: "Endereço 1" },
      endereco2: { name: "endereco2", type: "email", label: "Endereço 2" }
    }
  },
  {
    page: 3,
    inputs: {
      dataNascimento: {
        name: "dataNascimento",
        type: "text",
        label: "Data de Nascimento"
      },
      cpf: { name: "cpf", type: "text", label: "Cpf" },
      rendaMensal: {
        name: "Renda Mensal",
        type: "email",
        label: "Renda Mensal"
      }
    }
  }
];
console.log(
  pagesForm.filter(page => {
    if (page.page === 1) {
      console.log(page.inputs);
    }
  })
);
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

const FieldsPage = props => {
  return pagesForm.map((page, index) => {
    if (page.page === props.page) {
      console.log(page.inputs);
      return <Field {...page} />;
    }
  });
};

const NovoClientForm = class NovoClientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      redirectToClientes: false
    };
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { actions } = this.props;
    const { page } = this.state;
    return (
      <div className="form">
        <div>
          {page === 1 && <FirstForm onSubmit={this.nextPage} />}
          {page === 2 && (
            <SecondForm
              previousPage={this.previousPage}
              onSubmit={this.nextPage}
            />
          )}
          {page === 3 && (
            <ThirdForm
              previousPage={this.previousPage}
              onSubmit={actions.addCliente}
            />
          )}
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};
export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(NovoClientForm));
