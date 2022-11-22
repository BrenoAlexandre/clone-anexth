import React, { useState } from 'react';
import ScreenHeader from '../../components/ScreenHeader';
import { PatientService } from '../../services/patients.service';
import SearchButton from './components/SearchButton';
import style from './style.module.scss';
import PatientsList from './components/PatientsList';
import IPatient from '../../interfaces/IPatient';
import InvitationCard from './components/InvitationCard';

interface ILoadingParams {
  findPatient: boolean;
  sendInvitation: boolean;
}

const Prescription: React.FunctionComponent = () => {
  const [patients, setPatients] = useState<IPatient[] | undefined>(undefined);
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

        <InvitationCard />
      </section>
    </>
  );
};

export default Prescription;
