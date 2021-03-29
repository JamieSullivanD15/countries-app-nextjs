import { useState, useEffect } from 'react';
import useSWR from 'swr';

import BorderCountryCard from './BorderCountryCard';

import type { Country } from '../Country/CountryItem';

type Props = {
  countryCode: string;
};

const fetcher = (url) => (
  fetch(url).then(res => res.json().then(data => data))
);

const BorderCountryItem = ({ countryCode }: Props) => {
  const { data, error } = useSWR(`https://restcountries.eu/rest/v2/alpha/${countryCode}`, fetcher);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return <BorderCountryCard country={data} />
};

export default BorderCountryItem;
