import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import Link from 'next/link';
import CountryHeader from "./CountryHeader";

import countryStyles from '../../styles/Country.module.scss';

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

const CountryItem = ({ country }: Props) => {
  const { flag, name, capital, region, population } = country;

  return (
    <Link href={{
      pathname: '/country/[slug]',
      query: { slug: encodeURI(country.name.toLowerCase()) },
    }}>
      <li className={countryStyles.listItem}>
        <article className={`${countryStyles.card} width-full`}>
          <h2>{ name }</h2>
          <div className={countryStyles.listItem__container}>
            <div className={countryStyles.listItem__flag}>
              <img src={flag} alt={name} />
            </div>
            <div className={countryStyles.listItem__info}>
              <CountryHeader
                heading="Capital"
                value={capital}
                icon={<LocationCityIcon />}
              />
              <CountryHeader
                heading="Region"
                value={region}
                icon={<LocationOnIcon />}
              />
              <CountryHeader
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
};

export default CountryItem;
