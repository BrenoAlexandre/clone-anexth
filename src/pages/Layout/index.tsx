import React, { useState } from 'react';
import style from './style.module.scss';
import UnionSvg from '../../assets/Union.svg';
import UserIcon from '../../assets/UserIcon.svg';
import MenuDrawer from './components/MenuDrawer';
import MenuIcon from '@mui/icons-material/Menu';

const user = {
  profilePicture: UserIcon,
  name: 'Dr Caio Rocha',
};
const links = [
  { title: 'Home', about: 'Tela inicial', href: '/', selected: false },
  { title: 'Prescrições', about: 'Prescrições', href: '/', selected: true },
  { title: 'Teleconsulta', about: 'Teleconsulta', href: '/', selected: false },
  { title: 'Fale Conosco', about: 'Fale Conosco', href: '/', selected: false },
];

const Layout: React.FunctionComponent = () => {
  const [isDrawerOpen, toggleDrawer] = useState<boolean>(false);
  const openDrawer = () => toggleDrawer(true);
  const closeDrawer = () => toggleDrawer(false);

  return (
    <header id='ANexthHeader' className={style.header}>
      <img src={UnionSvg} alt='ANexth - Portal Médico' title='aNEXTH' />
      <div className={style.actions__links}>
        {links.map((link, index) => {
          return (
            <a
              key={index + 1 * Math.random()}
              title={link.about}
              className={style[`actions__${!link.selected ? 'link' : 'selected'}`]}
              href={link.href}
            >
              {link.title}
            </a>
          );
        })}
        <MenuIcon onClick={openDrawer} className={style.drawerIcon} fontSize='large' />
        <MenuDrawer className={style.drawer} open={isDrawerOpen} onClose={closeDrawer}>
          <img src={UnionSvg} alt='ANexth - Portal Médico' title='aNEXTH' />
          <div className={style.drawerIcon__links}>
            {links.map((link, index) => {
              return (
                <a
                  key={index + 1 * Math.random()}
                  title={link.about}
                  // className={style[`actions__${!link.selected ? 'link' : 'selected'}`]}
                  href={link.href}
                >
                  {link.title}
                </a>
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

export default Layout;
