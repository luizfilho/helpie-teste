import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import validate from "./validate";
import renderField from "./renderField";

const ThirdForm = props => {
  const {
    handleSubmit,
    pristine,
    previousPage,
    submitting,
    destroy,
    history
  } = props;
  console.log("PROPS TERCEIRO FORM", props);
  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
        destroy();
        history.push("/");
      }}
    >
      <div>
        <Field
          name="dataNascimento"
          type="text"
          label="Data Nascimento"
          component={renderField}
        />
        <Field name="cpf" type="text" label="Cpf" component={renderField} />
        <Field
          name="rendaMensal"
          type="text"
          label="Renda Mensal"
          component={renderField}
        />
      </div>
      <div className="control">
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          onClick={previousPage}
        >
          Anterior
        </Button>

        <Button
          type="submit"
          variant="outlined"
          color="primary"
          disabled={pristine || submitting}
        >
          Cadastrar Novo Cliente
        </Button>
      </div>
    </form>
  );
};

export default compose(
  withRouter,
  reduxForm({
    form: "wizard",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
  })
)(ThirdForm);
