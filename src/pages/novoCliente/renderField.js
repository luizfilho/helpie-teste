import React from "react";
import TextField from "@material-ui/core/TextField";

import "../../App.css";

const renderField = ({
  input,
  label,
  value,
  type,
  meta: { touched, error }
}) => {
  return (
    <div>
      <div>
        <TextField
          {...input}
          className="field"
          id="outlined-name"
          label={touched && error ? error : label}
          error={touched && error ? true : false}
          margin="normal"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default renderField;
