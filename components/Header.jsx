import headerStyles from '../styles/Header.module.scss';

const Header = () => (
  <div>
    <h1 className={headerStyles.title}>
      <span>Web Dev</span>
    </h1>
    <p className={headerStyles.description}>
      This is a paragraph.
    </p>
  </div>
);

export default Header;
