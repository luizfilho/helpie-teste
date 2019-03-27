import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Button from "@material-ui/core/Button";
import "../../App.css";
const SecondForm = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="cep" type="text" label="Cep" component={renderField} />
        <Field
          name="endereco1"
          type="text"
          label="Endereço 1"
          component={renderField}
        />
        <Field
          name="endereco2"
          type="text"
          label="Endereço 2"
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
})(SecondForm);
