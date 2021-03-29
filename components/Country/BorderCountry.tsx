import { useState, useEffect } from 'react';
import useSWR from 'swr';

import BorderCountryCard from './BorderCountryCard';

import type { Country } from './CountryItem';

const fetcher = (url) => (
  fetch(url).then(res => res.json().then(data => data))
);

const BorderCountry = ({ countryCode }) => {
  const { data, error } = useSWR(`https://restcountries.eu/rest/v2/alpha/${countryCode}`, fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <BorderCountryCard country={data} />

};

export default BorderCountry;
