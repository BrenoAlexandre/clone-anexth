import React from 'react';
import style from './style.module.scss';
import ScreenHeader from '../../components/ScreenHeader';

const Home: React.FunctionComponent = () => {
  return (
    <ScreenHeader title='Home'>
      <div className={style.headerContent}>
        <h2>Você está na home</h2>
        <span>Conheça nosso produto</span>
      </div>
    </ScreenHeader>
  );
};

export default Home;
