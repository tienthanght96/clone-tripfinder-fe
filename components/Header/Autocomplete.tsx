import React from 'react'
import { SearchIcon } from '@/components/Icons/Search'

export const HeaderAutocomplete: React.FC<{}> = () => {
  return (
    <div className="relative ml-24 max-w-sm w-full">
      <input
        className="pl-3 pr-8 py-2 inline-block w-full rounded-sm border bg-gray-100 border-gray-50 text-gray-600 font-semibold focus:outline-none focus:border-gray-200"
        placeholder="Search..."
      />
      <SearchIcon className="text-gray-400 w-5 h-5 stroke-current stroke-2 absolute top-3 right-3" />
    </div>
  )
}