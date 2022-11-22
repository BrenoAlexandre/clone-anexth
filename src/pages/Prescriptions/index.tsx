import React, { useState } from 'react';
import { Formik } from 'formik';
import ScreenHeader from '../../components/ScreenHeader';
import { PatientService } from '../../services/patients.service';
import SearchButton from './components/SearchButton';
import style from './style.module.scss';
import FormInput from './components/FormInput';
import Card from '../../components/Card';
import PatientsList from './components/PatientsList';

interface ILoadingParams {
  findPatient: boolean;
  sendInvitation: boolean;
}

const initialFormValues = {
  name: '',
  email: '',
  phoneNumber: '',
  gender: '',
  birthDate: '',
};

const formErrors = { name: '', email: '', phoneNumber: '', gender: '', birthDate: '' };

const Prescription = () => {
  const [patients, setPatients] = useState<any[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<ILoadingParams>({
    findPatient: false,
    sendInvitation: false,
  });

  const findPatients = async ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading({ ...isLoading, findPatient: true });

    const { value } = currentTarget;
    const result = await new PatientService().searchPatientsForPrescription(value);
    setPatients(result);

    setIsLoading({ ...isLoading, findPatient: false });
  };

  return (
    <>
      <ScreenHeader title='Prescrições'>
        <div className={style.headerContent}>
          <h2 id='screenHeaderContentTitle'>Encontre um paciente para prescrever:</h2>
          <span id='screenHeaderContentDescription'>
            Aqui você pode buscar por E-mail ou CPF para encontrar o paciente e começar a montar a
            sua prescrição
          </span>
          <div className={style.headerContent__action}>
            <input id='screenHeaderActionInput' type='text' />
            <SearchButton actionFn={findPatients} loading={isLoading.findPatient} />
          </div>
        </div>
      </ScreenHeader>

      <section id='prescriptionsBody' className={style.body}>
        {patients ? <PatientsList patients={patients} /> : null}

        <Card>
          <h3 className={style.cardTitle}>Convidar um novo paciente</h3>
          <span className={style.cardDescription}>
            Ao enviar um convite para o paciente se cadastrar, você pode montar uma prescrição que
            ele vai receber no momento que se cadastrar.
          </span>

          <Formik
            initialValues={initialFormValues}
            validate={(values) => {
              if (!values.name) formErrors.name = 'Por favor, preencha um nome.';
              else formErrors.name = '';

              if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                formErrors.email = 'E-mail inválido, insira um e-mail válido para continuar.';
              } else formErrors.email = '';

              if (
                !values.phoneNumber ||
                !/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/i.test(values.phoneNumber)
              ) {
                formErrors.phoneNumber =
                  'Celular inválido, insira um número válido para continuar.';
              } else formErrors.phoneNumber = '';

              if (!values.gender) formErrors.gender = 'Por favor, preencha o campo.';
              else formErrors.gender = '';

              if (!values.birthDate) formErrors.birthDate = 'Por favor, preencha uma data.';
              else formErrors.birthDate = '';

              return formErrors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit}>
                <FormInput
                  error={!!errors.name && touched.name ? errors.name : null}
                  placeholder='Nome'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />

                <FormInput
                  error={!!errors.email && touched.email ? errors.email : null}
                  placeholder='E-mail'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <FormInput
                  error={!!errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null}
                  placeholder='Celular'
                  name='phoneNumber'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phoneNumber}
                />

                <div className={style.selectorWrapper}>
                  <FormInput
                    error={!!errors.gender && touched.gender ? errors.gender : null}
                    placeholder='Gênero'
                    name='gender'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.gender}
                    options={['Gênero', 'Masculino', 'Feminino', 'Prefiro não dizer', 'Outro']}
                  />

                  <FormInput
                    error={!!errors.birthDate && touched.birthDate ? errors.birthDate : null}
                    type='date'
                    placeholder='00/00/0000'
                    name='birthDate'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birthDate}
                  />
                </div>
                <button type='submit' disabled={isSubmitting}>
                  Enviar convite
                </button>
              </form>
            )}
          </Formik>
        </Card>
      </section>
    </>
  );
};

export default Prescription;
