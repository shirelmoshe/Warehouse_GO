import { Link, Outlet } from 'react-router-dom';
import navigationLinks from './navigationLinks.json';
import { Nav, NavList, NavItem } from './NavigationBarStyle'; 

const NavigationBar: React.FC = () => {
  const links = navigationLinks as { path: string; label: string }[];

  return (
    <Nav>
      <NavList>
        {links.map((link) => (
          <NavItem key={link.path} >
            <Link to={link.path}>{link.label}</Link>
          </NavItem>
        ))}
      </NavList>
      <main>
        <Outlet />
      </main>
    </Nav>
  );
};

export default NavigationBar;
