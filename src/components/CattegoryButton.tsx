import clsx from 'clsx'

type CategoryButtonProps = {
  category: string
  active: string
}

export function CategoryButton({ category, active }: CategoryButtonProps) {
  return (
    <div
      className={clsx(
        'capitalize select-none flex justify-center w-fit py-1 px-4 m-1 items-center rounded-lg bg-light-grey text-light-blue hover:bg-light-grey-hov font-bold text-sm cursor-pointer',
        category === active && 'text-white bg-light-blue'
      )}
    >
      {category}
    </div>
  )
}
