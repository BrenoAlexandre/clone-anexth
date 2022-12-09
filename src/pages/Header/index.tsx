import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrawer from './components/MenuDrawer';
import style from './style.module.scss';
import UnionSvg from '../../assets/Union.svg';
import UserIcon from '../../assets/UserIcon.svg';

const user = {
  profilePicture: UserIcon,
  name: 'Dr Caio Rocha',
};

const Header: React.FunctionComponent = () => {
  const [links, _] = useState([
    { title: 'Home', about: 'Tela inicial', href: '/', selected: true },
    { title: 'Prescrições', about: 'Prescrições', href: '/prescriptions', selected: false },
    { title: 'Teleconsulta', about: 'Teleconsulta', href: '/telecon', selected: false },
    { title: 'Fale Conosco', about: 'Fale Conosco', href: '/contact', selected: false },
  ]);

  //TODO Abstrair esses links para poderem ser usados no Routes

  const location = useLocation();

  const [isDrawerOpen, toggleDrawer] = useState<boolean>(false);
  const openDrawer = () => toggleDrawer(true);
  const closeDrawer = () => toggleDrawer(false);

  return (
    <header id='AnexthHeader' className={style.header}>
      <img src={UnionSvg} alt='Anexth - Portal Médico' title='Anexth' />
      <div className={style.actions__links}>
        {links.map((link, index) => {
          return (
            <Link
              key={index + 1 * Math.random()}
              title={link.about}
              className={style[`actions__${link.href === location.pathname ? 'selected' : 'link'}`]}
              to={link.href}
            >
              {link.title}
            </Link>
          );
        })}
        <MenuIcon onClick={openDrawer} className={style.drawerIcon} fontSize='large' />
        <MenuDrawer className={style.drawer} open={isDrawerOpen} onClose={closeDrawer}>
          <img src={UnionSvg} alt='Anexth - Portal Médico' title='Anexth' />
          <div className={style.drawerIcon__links}>
            {links.map((link, index) => {
              return (
                <Link key={index + 1 * Math.random()} title={link.about} to={link.href}>
                  {link.title}
                </Link>
              );
            })}
          </div>
        </MenuDrawer>
        <div className={style.actions__profile}>
          <img src={user.profilePicture} title={user.name} alt='Foto de perfil' />
          <span>{user.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
