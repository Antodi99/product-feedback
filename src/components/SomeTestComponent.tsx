import { MouseEvent } from 'react'

type SomeTestComponentProps = {
  testProp: string
  optionalProp?: number
}

export const SomeTestComponent = ({
  testProp,
  optionalProp
}: SomeTestComponentProps) => {
  const handleClick = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    optionalParam?: string
  ) => {
    console.log('mouse event', event, optionalParam)
  }

  return (
    <div onClick={event => handleClick(event, 'optional')}>
      Here is some prop: {testProp}
    </div>
  )
}
