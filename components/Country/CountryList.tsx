import CountryItem from './CountryItem';

import countryStyles from '../../styles/Country.module.scss';

import type { Country } from './CountryItem';

type Props = {
  countries: Array<Country>;
};

const CountryList = ({ countries }: Props) => (
  <ul className={countryStyles.list}>
    { countries.map((country: Country, i: number) => <CountryItem key={i} country={country} />) }
  </ul>
);

export default CountryList;
