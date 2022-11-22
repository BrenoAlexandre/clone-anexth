import { Formik } from 'formik';
import React from 'react';
import style from './style.module.scss';
import FormInput from '../FormInput';
import IPatient from '../../../../interfaces/IPatient';
import { object, string } from 'yup';

const validationSchema = object().shape({
  name: string().required('Por favor, preencha um nome.'),
  email: string()
    .email('E-mail inválido, insira um e-mail válido para continuar.')
    .required('Por favor, preencha um e-mail.'),
  phoneNumber: string()
    // .matches(
    //   /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
    //   'Celular inválido, insira um número válido para continuar'
    // )
    //TODO Fazer uma máscara no campo para utilizar o regex
    .required('Por favor, preencha um número de celular.'),
  gender: string().required('Por favor, preencha o campo'),
  birthDate: string().required('Por favor, preencha uma data.'),
});
interface IProps {
  formHandler: (values: IPatient) => void;
}

const InvitationForm = ({ formHandler }: IProps): React.ReactElement => {
  const initialFormValues: IPatient = {
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    birthDate: '',
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          formHandler(values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FormInput
            error={!!errors.name && touched.name ? errors.name : ''}
            placeholder='Nome'
            name='name'
            onChange={(e) => {
              handleChange(e);
            }}
            onBlur={handleBlur}
            value={values.name}
          />

          <FormInput
            error={!!errors.email && touched.email ? errors.email : ''}
            placeholder='E-mail'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />

          <FormInput
            error={!!errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''}
            placeholder='Celular'
            name='phoneNumber'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phoneNumber}
          />

          <div className={style.selectorWrapper}>
            <FormInput
              options={['Gênero', 'Masculino', 'Feminino', 'Prefiro não dizer', 'Outro']}
              error={!!errors.gender && touched.gender ? errors.gender : ''}
              placeholder='Gênero'
              name='gender'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gender}
            />

            <FormInput
              error={!!errors.birthDate && touched.birthDate ? errors.birthDate : ''}
              placeholder='00/00/0000'
              name='birthDate'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.birthDate}
              type='date'
            />
          </div>
          <button type='submit' disabled={isSubmitting}>
            Enviar convite
          </button>
        </form>
      )}
    </Formik>
  );
};

export default InvitationForm;
