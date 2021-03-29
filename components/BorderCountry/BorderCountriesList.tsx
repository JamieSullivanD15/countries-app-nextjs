import countryStyles from '../../styles/Country.module.scss';

import BorderCountryItem from './BorderCountryItem';

import type { Country } from '../Country/CountryItem';

type Props = {
  countryCodes: Array<string>;
};

const BorderCountriesList = ({ countryCodes }: Props) => (
  <section className={countryStyles.borderCountries}>
    {
      countryCodes.length > 1
        ? (
          <>
            <h2>Bordering Countries</h2>
            <div className={countryStyles.borderCountries__container}>
              {
                countryCodes.map((code: string, i: number) => (
                  <BorderCountryItem key={i} countryCode={code} />
                ))
              }
            </div>
          </>
        )
        : ''
    }
  </section>
);

export default BorderCountriesList;
