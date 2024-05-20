type FilterComponentsWrapProps = {
  children: React.ReactNode
  title: string
}
const FilterComponentsWrap = ({
  children,
  title,
}: FilterComponentsWrapProps) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs">{title}</span>
      {children}
    </div>
  )
}

export default FilterComponentsWrap
