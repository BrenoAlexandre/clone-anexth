import React, { useState } from 'react';
import LoaderButton from './components/LoaderButton';
import style from './style.module.scss';
import PatientsList from './components/PatientsList';
import InvitationCard from './components/InvitationCard';
import { PatientService } from '../../services/patients.service';
import ScreenHeader from '../../components/ScreenHeader';
import IPatient from '../../interfaces/IPatient';
import busca from '../../assets/busca.svg';

const Prescription: React.FunctionComponent = () => {
  const patientService = new PatientService();
  const [patients, setPatients] = useState<IPatient[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const findPatients = async ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    try {
      setIsLoading(true);

      const { value } = currentTarget;
      const result = await patientService.searchPatientsForPrescription(value);
      setPatients(result);

      setIsLoading(false);
    } catch (error) {
      alert(`findPatientsError :>> ${error}`);
      //! Toast
      setIsLoading(false);
    }
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
            <LoaderButton onClick={findPatients} loading={isLoading}>
              <img src={busca} alt='Buscar' />
            </LoaderButton>
          </div>
        </div>
      </ScreenHeader>

      <section id='prescriptionsBody' className={style.body}>
        {patients ? <PatientsList patients={patients} /> : null}

        <InvitationCard />
      </section>
    </>
  );
};

export default Prescription;
