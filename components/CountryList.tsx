import countryStyles from '../styles/Country.module.scss';
import CountryItem from './CountryItem';

const CountryList = ({ countries }) => {
  return (
    <div className={countryStyles.grid}>
      {
        countries.map((country, i) => (
          <CountryItem key={i} country={country} />
        ))
      }
    </div>
  );
};

export default CountryList;
