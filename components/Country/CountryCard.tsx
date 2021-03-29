import LocationCityIcon from '@material-ui/icons/LocationCity';
import PersonIcon from '@material-ui/icons/Person';
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import countryStyles from '../../styles/Country.module.scss';

import CountryText from './CountryText';

import type { Country } from './CountryItem';

type Props = {
  country: Country;
};

type Currency = {
  code: string;
};

const CountryCard = ({ country: { name, capital, population, currencies, languages } }: Props) => {
  const countryCurrencies = currencies.map((currency: Currency) => currency.code);
  const countryLanguages = Object.keys(languages)
    .map((key: string) => languages[key].name)
    .join(", ");

  return (
    <section className={`${countryStyles.card} width-full`}>
      <h2>{ name }</h2>
      <div className={countryStyles.listItem__container}>
        <div className={countryStyles.listItem__info}>
          <CountryText
            heading="Capital"
            value={capital}
            icon={<LocationCityIcon />}
          />
          <CountryText
            heading="Population"
            value={population.toLocaleString()}
            icon={<PersonIcon />}
          />
          <CountryText
            heading="Currency"
            value={countryCurrencies}
            icon={<AttachMoneyIcon />}
          />
          <CountryText
            heading={languages.length > 1 ? 'Languages' : 'Language'}
            value={countryLanguages}
            icon={<LanguageIcon />}
          />
        </div>
      </div>
    </section>
  );
};

export default CountryCard;
