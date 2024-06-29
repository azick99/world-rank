'use client'
import { handleStatusChange } from '@/app/redux/features/countrySlice'
import { Checkbox } from '../ui/checkbox'
import FilterComponentsWrap from './FilterComponentsWrap'
import { useAppDispatch, useAppSelector } from '@/app/redux/helper/reduxHooks'

const Status = () => {
  const statusArray = useAppSelector((state) => state.countries.statusArray)
  const dispatch = useAppDispatch()
  
  return (
    <FilterComponentsWrap title="Status">
      <div className="flex flex-wrap gap-3 flex-col">
        {statusArray.map((status) => (
          <div className="flex gap-2 items-center" key={status.id}>
            <Checkbox
              id={status.id}
              className="border-gray-clr border-2 w-5 h-5 rounded data-[state=checked]:bg-light-blue-clr data-[state=checked]:border-light-blue-clr"
              checked={status.checked}
              onCheckedChange={() => dispatch(handleStatusChange(status.id))}
            />
            <label htmlFor={status.id} className="text-light-gray-clr text-sm">
              {status.name}
            </label>
          </div>
        ))}
      </div>
    </FilterComponentsWrap>
  )
}

export default Status
