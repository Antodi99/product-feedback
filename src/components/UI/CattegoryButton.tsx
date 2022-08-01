import React from 'react'

type CategoryProps = {
  category: string
}

function Category({category} : CategoryProps) {
  return (
    <div className='bg-light-grey flex justify-center w-fit py-1 px-4 m-1 items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm cursor-pointer'>
    {category}
    </div>
  )
}

export default Category
