'use client'
import { Country } from '@/lib/apiSchima'
import { Button } from '../ui/button'
import FilterComponentsWrap from './FilterComponentsWrap'
import { useState } from 'react'

const regionsArray = [
  'Americas',
  'Antarctic',
  'Africa',
  'Asia',
  'Europe',
  'Oceania',
]

const Region = () => {
  const [regions, setRegions] = useState(regionsArray)
  
  return (
    <FilterComponentsWrap title="Region">
      <div className="flex flex-wrap gap-4 text-sm">
        {regions.map((region) => (
          <Button
            className={`${
              region === 'Antarctic' || region === 'Oceania'
                ? 'text-gray-clr bg-transparent '
                : 'text-light-gray-clr bg-gray-clr/10'
            } `}
            key={region}
          >
            {region}
          </Button>
        ))}
      </div>
    </FilterComponentsWrap>
  )
}

export default Region
