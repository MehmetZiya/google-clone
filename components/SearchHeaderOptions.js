import React from 'react'
import SearchHeaderOption from './SearchHeaderOption'
import { SearchIcon, PhotographIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const SearchHeaderOptions = () => {
  const router = useRouter()
  const selected = router.query.searchType === '' || !router.query.searchType

  return (
    <div className='flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b'>
      <SearchHeaderOption title='All' Icon={SearchIcon} selected={selected} />
      <SearchHeaderOption
        title='Images'
        Icon={PhotographIcon}
        selected={router.query.searchType === 'image'}
      />
    </div>
  )
}

export default SearchHeaderOptions