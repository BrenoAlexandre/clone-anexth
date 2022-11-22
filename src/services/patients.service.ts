export class PatientService {
  public searchPatientsForPrescription = (query: string): Promise<any[]> => {
    //! Para implementação - Validar a query com regex e verificar se é email ou cpf

    const emptyResponse: any[] = [];

    const patients: Promise<any[]> = new Promise((resolve, reject) =>
      setTimeout(() => resolve(emptyResponse), 500)
    );

    return patients;
  };
}
