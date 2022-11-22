import React from 'react';
import style from './style.module.scss';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const ScreenHeader = ({ title, children }: IProps): React.ReactElement => {
  return (
    <section id='screenHeaderTitleSection' className={style.header}>
      <div id='screenHeaderTitleWrapper' className={style.header__title}>
        <span id='screenHeaderTitle'>{title}</span>
        <hr id='screenHeaderTitleColorfulThingy' />
      </div>
      {children}
    </section>
  );
};

export default ScreenHeader;
