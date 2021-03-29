import countryStyles from '../../styles/Country.module.scss';

import type { ReactNode } from 'react';

type Props = {
  heading: string;
  value: any;
  icon: ReactNode;
}

const CountryText = ({ heading, value, icon }: Props) => (
  <h3 className={countryStyles.header}>
    { icon }
    <span><strong>{ heading }</strong>: { value }</span>
  </h3>
);

export default CountryText;
