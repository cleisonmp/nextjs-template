import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FaSearch } from 'react-icons/fa'

import { Input } from '../../common/inputs/Input'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

const searchSchema = zod.object({
  search: zod.string().min(1, { message: 'A value is required' }),
})
export type SearchProps = zod.infer<typeof searchSchema>

export const Header = () => {
  const {
    register,
    formState: { errors },
  } = useForm<SearchProps>({
    resolver: zodResolver(searchSchema),
    shouldUseNativeValidation: true,
  })
  const handleSearchIconClick = () => {
    console.log('handleSearchIconClick')
  }
  return (
    <header className='sticky top-0 left-0 z-9999 flex w-full items-center gap-4 bg-app-background p-4'>
      <Link href='/'>
        <a className='border border-gray-400 p-2'>Home</a>
      </Link>
      <Link href='/about'>
        <a className='border border-gray-400 p-2'>About</a>
      </Link>
      <Link href='/contact'>
        <a className='border border-gray-400 p-2'>Contact</a>
      </Link>
      <div className='flex w-1/3 items-center text-lg text-gray-900'>
        <Input
          label='Search...'
          hasBorder={false}
          iconProps={{
            hasPasswordToggle: false,
            rightIcon: <FaSearch />,
            iconOnClickCallback: handleSearchIconClick,
          }}
          {...register('search')}
          helperText={errors.search?.message}
        />
      </div>
    </header>
  )
}
//
