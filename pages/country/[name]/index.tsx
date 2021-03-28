import Link from 'next/link';
import Meta from "../../../components/Meta";

const Country = ({ country }) => {
  return (
    <>
      <Meta title={country.name} description={country.name} />
      <h1>
        Country Name: { country.name }
      </h1>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${context.params.name}`);
  const country = await res.json();
  return {
    props: {
      country: country[0]
    }
  }
};

export default Country;

// export const getStaticProps = async (context) => {
//   const res = await fetch(`https://restcountries.eu/rest/v2/name/${encodeURI(context.params.name)}`);
//   const country = await res.json();
//   return {
//     props: {
//       country: country[0]
//     }
//   }
// };
//
// export const getStaticPaths = async () => {
//   const res = await fetch(`https://restcountries.eu/rest/v2/all`);
//   const countries = await res.json();
//   const countryNames = countries.map(country => country.name);
//   const paths = countryNames.map(name => (
//     { params: { name: name.toString().toLowerCase() }}
//   ));
//   return {
//     paths,
//     fallback: false,
//   }
// };
