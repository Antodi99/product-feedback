type CategoryButtonProps = {
  category: string
  active: string
}

export function CategoryButton({ category, active }: CategoryButtonProps) {
  return (
    <div
      className={
        active === category
          ? 'select-none text-white flex justify-center w-fit py-1 px-4 m-1 items-center rounded-lg bg-light-blue font-bold text-sm cursor-pointer'
          : 'select-none bg-light-grey flex justify-center w-fit py-1 px-4 m-1 items-center rounded-lg hover:bg-light-grey-hov text-light-blue font-bold text-sm cursor-pointer'
      }
    >
      {category}
    </div>
  )
}
