/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

export default function MenuDropdown({ selected, setSelected }: any) {
  const options: any = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ]
  const [isActive, setIsActive] = useState(false)
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button
          className='inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-white'
          onClick={(e: any) => setIsActive(!isActive)}
        >
          {selected}
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute left-0 md:right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
          {options.map((option: any) => (
            <div
              className='flex justify-between items-center px-4 py-3'
              key={option.id}
            >
              <Menu.Item>
                <a
                  href='#'
                  className='text-base text-dark-blue hover:text-violet-600'
                  onClick={(e) => {
                    setSelected(option)
                  }}
                >
                  {option}
                </a>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
