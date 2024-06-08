import Population from './filter-components/Population'
import Region from './filter-components/Region'
import Status from './filter-components/Status'

const Filters = () => {
  return (
    <div className="basis-3/12 flex flex-col gap-10">
      <Population />
      <Region />
      <Status/>
    </div>
  )
}

export default Filters
