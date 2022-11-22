import React from 'react';
import style from './style.module.scss';

interface IProps {
  patients: any[];
}

const PatientsList = ({ patients }: IProps): React.ReactElement => {
  return patients.length > 0 ? (
    <ul>
      {patients.map((patient, index) => {
        return <li key={index + 1 * Math.random()}>{patient}</li>;
      })}
    </ul>
  ) : (
    <span className={style.emptyResult}>Nenhum paciente foi encontrado</span>
  );
};

PatientsList.defaultProps = { patients: [] };
export default PatientsList;
