import { ReactNode } from 'react';

import styles from "../../styles/Layout.module.scss";
import countryStyles from '../../styles/Country.module.scss';

type Props = {
  heading: string;
  value: any;
  icon: ReactNode;
}

const CountryHeader = ({ heading, value, icon }: Props) =>  (
  <>
    <h3 className={countryStyles.header}>
      { icon }
      <span>{ heading }: { value }</span>
    </h3>
  </>
);

export default CountryHeader;
