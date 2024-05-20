import Population from './filter-components/Population'
import Region from './filter-components/Region'

const Filters = () => {
  return (
    <div className="basis-3/12 flex flex-col gap-10">
      <Population />
      <Region />
    </div>
  )
}

export default Filters
