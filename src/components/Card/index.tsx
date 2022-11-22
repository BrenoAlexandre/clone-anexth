import React from 'react';
import style from './style.module.scss';

interface IProps {
  children: React.ReactNode;
}

export const Card = ({ children }: IProps) => {
  return <div className={style.Card}>{children}</div>;
};

export default Card;
