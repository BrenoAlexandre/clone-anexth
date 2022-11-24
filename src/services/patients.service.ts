import IPatient from '../interfaces/IPatient';
import HttpClient from './HttpClient';

export class PatientService {
  public async searchPatientsForPrescription(param: string): Promise<any[]> {
    //! Para implementação - Validar o param com regex e verificar se é email ou cpf

    const emptyResponse: IPatient[] = [];

    // const patients: Promise<IPatient[]> = HttpClient.api.get(`/patient/${parsedParam}`)

    const patients: Promise<IPatient[]> = new Promise((resolve, reject) => {
      const rand = Math.floor(Math.random() * 10 + 1);
      console.log(rand);

      setTimeout(() => {
        rand !== 6
          ? resolve(emptyResponse)
          : reject('Um erro ocorreu ao buscar os pacientes! Tente novamente mais tarde.');
      }, 500);
      console.log('searchPatientsForPrescription data:', param);
    });

    return patients;
  }

  public async sendInvitation(data: IPatient): Promise<boolean> {
    // const invitationHasBeenSent = HttpClient.api.post(`/patient/invite`, data);

    const invitationHasBeenSent: Promise<boolean> = new Promise((resolve, reject) => {
      const rand = Math.floor(Math.random() * 10 + 1);
      console.log(rand);
      setTimeout(() => {
        rand !== 4
          ? resolve(true)
          : reject('Um erro ocorreu ao enviar o convite! Tente novamente mais tarde.');
      }, 400);
      console.log('sendInvitation data:', data);
    });

    return invitationHasBeenSent;
  }
}
