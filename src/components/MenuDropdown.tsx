import clsx from 'clsx'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FaCheck } from 'react-icons/fa'

const options = [
  'Most Upvotes',
  'Least Upvotes',
  'Most Comments',
  'Least Comments',
]

type MenuDropdownProps = {
  selected: string
  setSelected: (selected: string) => void
}

export function MenuDropdown({ selected, setSelected }: MenuDropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <Menu as='div' className='relative inline-block text-left md:w-52 md:ml-6'>
      <div>
        <Menu.Button
          className='inline-flex w-full rounded-md px-4 py-2 text-sm font-medium text-white justify-between'
          onClick={() => setOpen(!open)}
        >
          Sort by : {selected}
          <ChevronDownIcon
            className={clsx(
              '-mr-1 h-5 w-5 ease-linear duration-150',
              open && 'rotate-180'
            )}
            aria-hidden='true'
          />
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
          {options.map((option, idx) => (
            <Menu.Item key={idx}>
              <div
                className='flex justify-between items-center px-4 py-3 cursor-pointer text-base text-dark-blue hover:text-violet-600'
                onClick={() => {
                  setSelected(option)
                  setOpen(false)
                }}
              >
                {option}
                {selected === option && (
                  <FaCheck className='text-violet-600 text-sm' />
                )}
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
