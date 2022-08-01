import React from 'react'

function HeaderBox(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  return (
    <div className='width-full h-fit mt-6 bg-white rounded-lg p-4'>
{props.children}
    </div>
  )
}

export default HeaderBox
