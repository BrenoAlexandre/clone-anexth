import React, { useState } from 'react';
import style from './style.module.scss';
import InvitationForm from '../InvitationForm';
import Card from '../../../../components/Card';
import IPatient from '../../../../interfaces/IPatient';
import { Modal, Box, Typography } from '@mui/material';

const InvitationCard = (): React.ReactElement => {
  const [invitedPatient, setInvitedPatient] = useState<IPatient>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    birthDate: '',
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const invitationHandler = (values: IPatient) => {
    setInvitedPatient(values);
    openModal();
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

        <Modal
          open={isOpen}
          onClose={closeModal}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box className={style.modal}>
            {/* X icon */}
            <div className={style.modal__content}>
              <h3>Você está convidando:</h3>

              <div className={style.patientInfo}>
                <span className={style.name}>{invitedPatient.name}</span>
                <span className={style.email}>{invitedPatient.email}</span>
                <span className={style.phoneNumber}>{invitedPatient.phoneNumber}</span>
              </div>

              <span className={style.confirmationMessage}>Confirma o envio do convite?</span>

              <button>Enviar convite</button>

              <span className={style.editInfo}>Editar informações</span>
            </div>
          </Box>
        </Modal>
      </Card>
    </>
  );
};

export default InvitationCard;
