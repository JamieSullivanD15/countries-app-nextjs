import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import countryStyles from '../../styles/Country.module.scss';

import Link from 'next/link';
import CountryText from "./CountryText";

export type Country = {
  name: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  currencies: Array<any>;
  languages: Array<any>;
  borders: Array<string>;
};

type Props = {
  country: Country;
};

const CountryItem = ({ country: { flag, name, capital, region, population } }: Props) => (
  <Link href={{
    pathname: '/country/[slug]',
    query: { slug: encodeURI(name.toLowerCase()) },
  }}>
    <li className={countryStyles.listItem}>
      <article className={`${countryStyles.card} width-full`}>
        <h2>{ name }</h2>
        <div className={countryStyles.listItem__container}>
          <div className={countryStyles.listItem__flag}>
            <img src={flag} alt={name} />
          </div>
          <div className={countryStyles.listItem__info}>
            <CountryText
              heading="Capital"
              value={capital}
              icon={<LocationCityIcon />}
            />
            <CountryText
              heading="Region"
              value={region}
              icon={<LocationOnIcon />}
            />
            <CountryText
              heading="Population"
              value={population.toLocaleString() }
              icon={<PersonIcon />}
            />
          </div>
        </div>
      </article>
    </li>
  </Link>
);

export default CountryItem;
