import { styled } from '@mui/material/styles';
import Drawer, { DrawerProps, drawerClasses } from '@mui/material/Drawer';
import { paperClasses } from '@mui/material/Paper';

const MenuDrawer = styled(({ children, ...props }: DrawerProps) => (
  <Drawer anchor='right' {...props}>
    {children}
  </Drawer>
))(() => ({
  [`& .${drawerClasses.paper}`]: {
    backgroundColor: '#EF5555',
    color: '#ffffff',
    fontWeight: '500',
    fontSize: '10px',
    lineHeight: '12px',
    textAlign: 'center',
    border: '1px solid #dadde9',
  },
  [`& .${paperClasses.root}`]: {
    width: '40vw',
    padding: '2.6rem 5rem',
    gap: '3.2rem',
    backgroundColor: '#ffffff',
    color: '#007dfa',
  },
}));

export default MenuDrawer;
