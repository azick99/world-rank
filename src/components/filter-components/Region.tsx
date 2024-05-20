import { Button } from '../ui/button'
import FilterComponentsWrap from './FilterComponentsWrap'

const Region = () => {
  return (
    <FilterComponentsWrap title="Region">
      <div className="flex flex-wrap">
        <Button className="text-light-gray-clr bg-gray-clr/10 text-sm">
          Americas
        </Button>
        <Button className="text-gray-clr bg-transparent hover:bg-transparent  text-sm">Americas</Button>
      </div>
    </FilterComponentsWrap>
  )
}

export default Region
