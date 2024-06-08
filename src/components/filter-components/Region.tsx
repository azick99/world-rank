import { Button } from '../ui/button'
import FilterComponentsWrap from './FilterComponentsWrap'

const Region = () => {
  return (
    <FilterComponentsWrap title="Region">
      <div className="flex flex-wrap gap-4 text-sm">
        <Button className="text-light-gray-clr bg-gray-clr/10">
          Americas
        </Button>
        <Button className="text-gray-clr bg-transparent hover:bg-transparent ">
          Antarctic
        </Button>
        <Button className="text-light-gray-clr bg-gray-clr/10">
          Africa
        </Button>
        <Button className="text-light-gray-clr bg-gray-clr/10">
          Asia
        </Button>
        <Button className="text-light-gray-clr bg-gray-clr/10">
          Europe
        </Button>
        <Button className="text-gray-clr bg-transparent hover:bg-transparent ">
          Oceania
        </Button>
      </div>
    </FilterComponentsWrap>
  )
}

export default Region