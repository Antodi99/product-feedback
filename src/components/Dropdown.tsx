import clsx from 'clsx'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FaCheck } from 'react-icons/fa'

type DropdownProps = {
  selected: string
  handleChange: (field: string) => (option: string) => {}
  options: string[]
  errors: string | undefined
  touched: boolean | undefined
}

export function Dropdown({
  selected,
  handleChange,
  options,
  errors,
  touched,
}: DropdownProps) {
  return (
    <Menu
      as='div'
      className='relative inline-block text-left w-full bg-light-grey mt-4 rounded-lg'
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button
              className={
                errors && touched
                  ? '-z-10 inline-flex w-full rounded-md px-4 py-2 font-medium text-light-blue hover:text-fuchsia-400 justify-between border-rose-500 border-2 border-solid'
                  : '-z-10 inline-flex w-full rounded-md px-4 py-2 font-medium text-light-blue hover:text-fuchsia-400 justify-between'
              }
            >
              {selected}
              <ChevronDownIcon
                className={clsx(
                  '-mr-1 h-5 w-5 ease-linear duration-150 text-light-blue',
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
            <Menu.Items className='z-10 origin-top-right absolute left-0 md:right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
              {options.map((option: any, idx: any) => (
                <Menu.Item key={idx}>
                  <div
                    className='flex justify-between items-center px-4 py-3 cursor-pointer text-base text-dark-blue hover:text-fuchsia-400'
                    onClick={() => handleChange('category')(option)}
                  >
                    {option}
                    {selected === option && (
                      <FaCheck className='text-fuchsia-400 text-xs' />
                    )}
                  </div>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
