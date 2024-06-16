import Region from './filter-components/Region'
import Status from './filter-components/Status'
import SrotedBy from './filter-components/SortedBy'
import { Countries } from '@/lib/apiSchima'

const Filters = () => {

  return (
    <div className="basis-3/12 flex flex-col gap-10">
      <SrotedBy />
      <Region  />
      <Status  />
    </div>
  )
}

export default Filters
