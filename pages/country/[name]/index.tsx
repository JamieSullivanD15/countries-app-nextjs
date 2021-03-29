import useSWR from 'swr';
import ArrowBack from '@material-ui/icons/ArrowBack';

import countryStyles from '../../../styles/Country.module.scss';

import Link from 'next/link';
import Meta from '../../../components/Layout/Meta';
import CountryInfo from '../../../components/Country/CountryInfo';

import type { Country } from '../../../components/Country/CountryItem';

type Props = {
  country: Country;
};

const CountryPage = ({ country }: Props) =>  (
  <>
    <Meta title={country.name} description={country.name} />
    <CountryInfo country={country} />
  </>
);

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

export default CountryPage;
