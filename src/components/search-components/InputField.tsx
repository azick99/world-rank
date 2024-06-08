'use client'
import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

const InputField = () => {
  const router = useRouter()
  const [text, setText] = useState('')
  const [query] = useDebounce(text, 500)
  useEffect(() => {
    if (!query) {
      router.push('/')
    } else {
      router.push(`/?search=${query}`)
    }
  }, [query, router])

  return (
    <Input
      type="search"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Search by Name, Region, Subregion"
      className="border border-transparent bg-gray-clr/30 placeholder:text-gray-clr w-80 pl-10 focus:border focus:border-light-gray-clr focus:border-solid "
    />
  )
}

export default InputField
