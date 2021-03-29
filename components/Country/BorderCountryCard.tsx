import { useState, useEffect } from 'react';
import useSWR from 'swr';

import countryStyles from '../../styles/Country.module.scss';

import Link from 'next/link';
import CountryHeader from './CountryHeader';

import type { Country } from './CountryItem';

type Props = {
  country: Country;
};

const BorderCountryCard = ({ country }: Props) => {
  const { name, flag, capital, region, population } = country;
  return (
    <Link href={{
      pathname: '/country/[slug]',
      query: { slug: encodeURI(name.toLowerCase()) },
    }}>
      <div className={countryStyles.card}>
        <div className={countryStyles.flag}>
          <img src={flag} alt={name} width={80} />
        </div>
        <h4>{ name }</h4>
      </div>
    </Link>
  )
};


export default BorderCountryCard;
