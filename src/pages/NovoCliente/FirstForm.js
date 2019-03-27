import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Button from "@material-ui/core/Button";

const FirstForm = props => {
  const { handleSubmit, pageInputs } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="nome" type="text" label="Nome" component={renderField} />
        <Field
          name="sobrenome"
          type="text"
          label="Sobrenome"
          component={renderField}
        />
        <Field
          name="email"
          type="email"
          label="E-mail"
          component={renderField}
        />
        <Field
          name="telefone"
          type="tel"
          label="Telefone"
          component={renderField}
        />
      </div>
      <div className="controlFirst">
        <Button type="submit" variant="outlined" color="primary">
          Proximo
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(FirstForm);
