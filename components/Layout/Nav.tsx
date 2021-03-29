import PublicIcon from '@material-ui/icons/Public';

import navStyles from '../../styles/Nav.module.scss';

import Link from 'next/link';

const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>
      <li>
        <PublicIcon className={navStyles.nav__icon} />
        <Link href='/'>Countries</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
