import CountryList from '../components/Country/CountryList';
import Meta from '../components/Layout/Meta';

import type { Country } from '../components/Country/CountryItem';

type Props = {
  countries: Array<Country>;
};

const HomePage = ({ countries }: Props) => (
  <div>
    <Meta />
    <CountryList countries={countries} />
  </div>
);

export const getStaticProps  = async () => {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await res.json();

  return {
    props: {
      countries,
      showBackBtn: false,
    }
  }
};

export default HomePage;
