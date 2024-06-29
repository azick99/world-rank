'use client'
import Image from 'next/image'
import React from 'react'
import SearchInput from './search-components/SearchInput'
import { useAppSelector } from '@/app/redux/helper/reduxHooks'

const Search = () => {
  const foundCountries = useAppSelector(
    (state) => state.countries.foundCountries
  )
  return (
    <>
      <span className="font-semibold ">Found {foundCountries} countries</span>
      <div className="relative">
        <Image
          src="./Search.svg"
          alt="search"
          width={20}
          height={20}
          className="absolute top-2.5 left-2"
          loading="eager"
        />
        <SearchInput />
      </div>
    </>
  )
}

export default Search
