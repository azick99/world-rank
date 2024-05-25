import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import FilterComponentsWrap from './FilterComponentsWrap'

const Population = () => {
  return (
    <FilterComponentsWrap title="Sorted by">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex justify-between items-center text-light-gray-clr py-2 px-4 border-2 border-gray-clr/40 border-solid rounded-md outline-none">
          <span className="text-sm">Population</span>
          <Image src="./Expand_down.svg" alt="expand" width={20} height={20} loading='eager'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </FilterComponentsWrap>
  )
}

export default Population
