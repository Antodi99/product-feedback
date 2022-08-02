import React from 'react'

function HeaderBox(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  return (
    <div className='md:h-auto md:opacity-100 md:w-1/3 md:ml-4 lg:width-full lg:h-fit lg:w-full bg-white rounded-lg md:p-4 lg:mt-6 lg:ml-0'>
{props.children}
    </div>
  )
}

export default HeaderBox
