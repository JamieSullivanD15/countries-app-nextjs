import Link from 'next/link';
import countryStyles from '../styles/Country.module.scss';

const CountryItem = ({ country }) => {
  return (
    <Link href={{
      pathname: '/country/[slug]',
      query: { slug: encodeURI(country.name.toLowerCase()) },
    }}>
      <a className={countryStyles.card}>
        <h3>Country Name: { country.name }</h3>
        <h3>Country Capital: { country.capital }</h3>
        <h3>Population: { country.population }</h3>
      </a>
    </Link>
  );
};

export default CountryItem;
