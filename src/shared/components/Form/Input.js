import React from "react";
import { Field, ErrorMessage } from "formik";

function Input(props) {
  const { label, name, children, ...rest } = props;
  return (
    <div className="form__form-group">
      <div className="form__form-group-field">
        {label && <span className="form__form-group-label">{label}</span>}
        <Field id={name} name={name} {...rest} />
        {children} {/* this should render the input group icon */}
      </div>
    </div>
  );
}
export default Input;
