import { ReactNode } from 'react'

type HeaderBoxProps = {
  children: ReactNode
}

export function HeaderBox({ children }: HeaderBoxProps) {
  return (
    <div className='hidden md:block md:h-auto md:opacity-100 md:w-64 md:ml-4 lg:h-fit bg-white rounded-lg md:p-4 lg:mt-6 lg:ml-0'>
      {children}
    </div>
  )
}
