'use client'
import { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import FilterComponentsWrap from './FilterComponentsWrap'

export const statusArray = [
  { id: 'unMember', name: 'Member of the United Nations', checked: false },
  { id: 'independent', name: 'Independent', checked: true },
]

const Status = () => {
  const [statusChecked, setStatusChecked] = useState(statusArray)

  const handleStatusChange = (id: string) => {
    const updatedStatus = statusChecked.map((status) => {
      if (status.id === id) {
        return { ...status, checked: !status.checked }
      }
      return status
    })
    setStatusChecked(updatedStatus)
  }

  return (
    <FilterComponentsWrap title="Status">
      <div className="flex flex-wrap gap-3 flex-col">
        {statusChecked.map((status) => (
          <div className="flex gap-2 items-center" key={status.id}>
            <Checkbox
              id={status.id}
              className="border-gray-clr border-2 w-5 h-5 px-[2px] rounded data-[state=checked]:bg-light-blue-clr data-[state=checked]:border-light-blue-clr"
              checked={status.checked}
              onCheckedChange={() => handleStatusChange(status.id)}
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
