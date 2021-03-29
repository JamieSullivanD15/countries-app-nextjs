import PublicIcon from '@material-ui/icons/Public';

import navStyles from '../../styles/Nav.module.scss';

import Link from 'next/link';

const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>
      <li>
        <Link href='/'>Countries</Link>
        <PublicIcon />
      </li>
    </ul>
  </nav>
);

export default Nav;
