'use client'
import { useAppDispatch, useAppSelector } from '@/app/redux/helper/reduxHooks'
import { Button } from '../ui/button'
import FilterComponentsWrap from './FilterComponentsWrap'
import { handleRegionChange } from '@/app/redux/features/countrySlice'

const regionsArray = [
  'Americas',
  'Antarctic',
  'Africa',
  'Asia',
  'Europe',
  'Oceania',
]
const Region = () => {
  const regions = useAppSelector((state) => state.countries.regions)
  const dispatch = useAppDispatch()
  return (
    <FilterComponentsWrap title="Region">
      <div className="flex flex-wrap gap-4 text-sm">
        {regionsArray.map((region) => (
          <Button
            onClick={() => dispatch(handleRegionChange(region))}
            className={
              regions.includes(region)
                ? 'text-light-gray-clr bg-gray-clr/10 '
                : 'text-gray-clr bg-transparent hover:bg-transparent'
            }
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
