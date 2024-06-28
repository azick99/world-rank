type CountryRawValueProps = {
  title: string
  content?: string | string[]
}

const CountryRawValue = ({ title, content }: CountryRawValueProps) => {
  return (
    <div className="flex justify-between py-6 px-5 w-full">
      <span className="basis-1/3">{title}</span>
      <span className="text-light-gray-clr basis-2/3 text-right">{content}</span>
    </div>
  )
}

export default CountryRawValue
