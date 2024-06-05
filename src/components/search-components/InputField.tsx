import React from 'react'
import { Input } from '../ui/input'

const InputField = () => {
    
  return (
    <Input
      type="search"
      placeholder="Search by Name, Region, Subregion"
      className="border border-transparent bg-gray-clr/30 placeholder:text-gray-clr w-80 pl-10 focus:border focus:border-light-gray-clr focus:border-solid "
    />
  )
}

export default InputField
