import * as Yup from 'yup';

const idSearchValidator = Yup.object().shape({
  search: Yup.number().typeError('Значение должно быть числом'),
});

export default idSearchValidator;
