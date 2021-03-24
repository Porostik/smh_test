import React from 'react';
import { Field, Form, Formik } from 'formik';

import Input from './Input';
import './Search.scss';

function SearchComponent({ onSubmit }) {
  return (
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values) => onSubmit(values.search)}>
      {() => (
        <Form className="search-form">
          <Field name="search" as={Input} />
          <button className="search-form__button" type="submit">
            Поиск
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SearchComponent;
