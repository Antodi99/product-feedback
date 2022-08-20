import clsx from 'clsx'
import { Category } from './Header'

type CategoryButtonProps = {
  category: string
  active: string
}

export function CategoryButton({ category, active }: CategoryButtonProps) {
  return (
    <div
      className={clsx(
        'select-none bg-light-grey flex justify-center w-fit py-1 px-4 m-1 items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm cursor-pointer capitalize',
        category === active && 'text-white bg-light-grey-hov',
        (category === Category.UI || category === Category.UX) && '!uppercase'
      )}
    >
      {category}
    </div>
  )
}
