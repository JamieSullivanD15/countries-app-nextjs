import CountryList from '../components/CountryList';
import Meta from '../components/Meta';

const Home = ({ countries }) => {
  return (
    <div>
      <Meta />
      <CountryList countries={countries} />
    </div>
  );
};

export const getStaticProps  = async () => {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await res.json();

  return {
    props: {
      countries
    }
  }
};

export default Home;
