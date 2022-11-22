import style from './style.module.scss';
import UnionSvg from '../../assets/Union.svg';
import UserIcon from '../../assets/UserIcon.svg';
import Prescription from '../Prescriptions';

const user = {
  name: 'Dr Caio Rocha',
};
const links = [
  { title: 'Home', about: 'Tela inicial', href: '/', selected: false },
  { title: 'Prescrições', about: 'Prescrições', href: '/', selected: true },
  { title: 'Teleconsulta', about: 'Teleconsulta', href: '/', selected: false },
  { title: 'Fale Conosco', about: 'Fale Conosco', href: '/', selected: false },
];

const Layout = () => {
  return (
    <>
      <header id='ANexthHeader' className={style.header}>
        <img src={UnionSvg} alt='ANexth - Portal Médico' title='aNEXTH' />
        <div className={style.actions__links}>
          {links.map((link, index) => {
            return (
              <a
                key={index + 1 * Math.random()}
                title={link.about}
                className={style[`actions__${link.selected ? 'selected' : 'link'}`]}
                href={link.href}
              >
                {link.title}
              </a>
            );
          })}
          <div className={style.actions__profile}>
            <img src={UserIcon} alt='Foto do usuário' />
            <span>{user.name}</span>
          </div>
        </div>
      </header>
      <main>
        <Prescription /> {/* //TODO Rotas aqui */}
      </main>
    </>
  );
};

export default Layout;
