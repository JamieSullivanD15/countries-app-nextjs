import countryStyles from '../../styles/Country.module.scss';

import CountryCard from './CountryCard';
import BorderCountriesList from '../BorderCountry/BorderCountriesList';

import type { Country } from './CountryItem';

type Props = {
  country: Country;
};

const CountryInfo = ({ country }: Props) => {
  const { name, flag, borders } = country;

  return (
    <>
      <div>
        <img
          src={flag}
          alt={name}
          className={countryStyles.flag}
        />
      </div>
      <CountryCard country={country} />
      <BorderCountriesList countryCodes={borders} />
    </>
  );
};

export default CountryInfo;
