import React from 'react';
import { useField } from 'formik';
import './Input.scss';

function Input(props) {
  const [field, meta] = useField(props);

  return (
    <div className="form-input">
      <input {...field} />
      {meta.error && <span className="error">{meta.error}</span>}
    </div>
  );
}

export default Input;
