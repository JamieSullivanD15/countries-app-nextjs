import ArrowBack from '@material-ui/icons/ArrowBack';

import countryStyles from '../../../styles/Country.module.scss';

import Link from 'next/link';
import Meta from '../../../components/Layout/Meta';
import CountryInfo from '../../../components/Country/CountryInfo';

const Country = ({ country }) => {
  return (
    <>
      <Meta title={country.name} description={country.name} />
      <CountryInfo country={country} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${context.params.name}`);
  const country = await res.json();
  return {
    props: {
      country: country[0],
      showBackBtn: true
    }
  }
};

export default Country;
