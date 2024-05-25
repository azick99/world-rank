import { Checkbox } from '../ui/checkbox'
import FilterComponentsWrap from './FilterComponentsWrap'

const Status = () => {
  return (
    <FilterComponentsWrap title="Status">
      <div className="flex flex-wrap gap-3 flex-col">
        <div className="flex gap-2 items-center">
          <Checkbox
            id="Member UN"
            className="border-gray-clr border-2 w-5 h-5 px-[2px] rounded data-[state=checked]:bg-light-blue-clr data-[state=checked]:border-light-blue-clr"
          />
          <label
            htmlFor="Member UN" 
            className="text-light-gray-clr text-sm"
          >
            Member of the United Nations
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <Checkbox
            id="Independent"
            className="border-gray-clr border-2 w-5 h-5 px-[2px] rounded data-[state=checked]:bg-light-blue-clr data-[state=checked]:border-light-blue-clr"
          />
          <label
            htmlFor="Independent"
            className="text-light-gray-clr text-sm"
          >
            Independent
          </label>
        </div>
      </div>
    </FilterComponentsWrap>
  )
}

export default Status
