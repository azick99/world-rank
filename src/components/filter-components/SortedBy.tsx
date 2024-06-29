'use client'
import FilterComponentsWrap from './FilterComponentsWrap'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const SrotedBy = () => {
  const router = useRouter()
  const [value, setValue] = useState('population')

  useEffect(() => {
    if (!value) {
      router.push('/')
    } else {
      router.push(`/?sortedBy=${value}`)
    }
  }, [value, router])

  return (
    <FilterComponentsWrap title="Sorted by">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="flex justify-between items-center bg-dark-clr text-light-gray-clr py-2 px-4 border-gray-clr/40 border-2 border-solid rounded-md ">
          <SelectValue placeholder="population" />
        </SelectTrigger>
        <SelectContent className="bg-dark-clr text-light-gray-clr border-2 border-gray-clr/40 border-solid">
          <SelectItem value="population">Population</SelectItem>
          <SelectItem value="name">Name</SelectItem>
          <SelectItem value="area">Area</SelectItem>
        </SelectContent>
      </Select>
    </FilterComponentsWrap>
  )
}

export default SrotedBy
