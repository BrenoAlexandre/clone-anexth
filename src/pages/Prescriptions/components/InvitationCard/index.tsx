import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import style from './style.module.scss';
import InvitationForm from '../InvitationForm';
import LoaderButton from '../LoaderButton';
import Card from '../../../../components/Card';
import IPatient from '../../../../interfaces/IPatient';
import { PatientService } from '../../../../services/patients.service';

interface IInvitationStatus {
  invited: boolean;
  success: boolean;
}

const InvitationCard = (): React.ReactElement => {
  const patientService = new PatientService();
  const [invitedPatient, setInvitedPatient] = useState<IPatient>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    birthDate: '',
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [isInvited, setInvited] = useState<IInvitationStatus>({ invited: false, success: false });

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => {
    setInvited({ invited: false, success: false });
    setIsOpen(false);
  };

  const invitationHandler = (values: IPatient): void => {
    setInvitedPatient(values);
    openModal();
  };

  const sendInvitation = async (): Promise<void> => {
    try {
      setSubmitting(true);

      const invitationStatus = await patientService.sendInvitation(invitedPatient);
      setInvited({ invited: true, success: invitationStatus });

      setSubmitting(false);
    } catch (error) {
      setInvited({ invited: true, success: false });
      alert(`sendInvitationError :>> ${error}`);

      //! Toast
      setSubmitting(false);
    }
  };

  const submitPrescription = (): void => {
    setSubmitting(true);
    setTimeout(() => {
      alert('Função não implementada');
      //? Redirecionar o usuário à tela para criar a prescrição
      closeModal();
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Card>
        <h3 className={style.cardTitle}>Convidar um novo paciente</h3>
        <span className={style.cardDescription}>
          Ao enviar um convite para o paciente se cadastrar, você pode montar uma prescrição que ele
          vai receber no momento que se cadastrar.
        </span>
        <InvitationForm formHandler={invitationHandler} />

        <Modal open={isOpen} onClose={closeModal}>
          <Box className={style.modal}>
            {/* X icon */}
            <div className={style.modal__content}>
              {!isInvited.success ? (
                <>
                  <h3 className={style.modalDescription}>Você está convidando:</h3>
                  <div className={style.patientInfo}>
                    <span className={style.name}>{invitedPatient.name}</span>
                    <span className={style.email}>{invitedPatient.email}</span>
                    <span className={style.phoneNumber}>{invitedPatient.phoneNumber}</span>
                  </div>
                  <span className={style.confirmationMessage}>Confirma o envio do convite?</span>
                  <LoaderButton
                    onClick={sendInvitation}
                    loading={isSubmitting}
                    className={style.action}
                  >
                    {isInvited.invited && !isInvited.success
                      ? 'Tentar novamente'
                      : 'Enviar convite'}
                  </LoaderButton>
                  <span className={style.editInfo} onClick={closeModal}>
                    Editar informações
                  </span>
                </>
              ) : (
                <>
                  <h2 className={style.modalTitle}>Parabéns!</h2>
                  <h3 className={style.modalDescription}>Você convidou:</h3>
                  <div className={style.patientInfo}>
                    <span className={style.name}>{invitedPatient.name}</span>
                    <span className={style.email}>{invitedPatient.email}</span>
                  </div>
                  <LoaderButton
                    onClick={submitPrescription}
                    loading={isSubmitting}
                    className={style.action}
                  >
                    Cadastrar prescrição
                  </LoaderButton>
                </>
              )}
            </div>
          </Box>
        </Modal>
      </Card>
    </>
  );
};

export default InvitationCard;
