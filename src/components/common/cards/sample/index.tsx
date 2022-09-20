import Image from 'next/image'

export interface SampleCardProps {
  tag: string
  title: string
  body: string
  imageUrl: string
  author: {
    name: string
    avatarUrl: string
  }
  time: string
}

export const SampleCard = ({
  tag,
  title,
  body,
  imageUrl,
  author,
  time,
}: SampleCardProps) => {
  return (
    <div className='flex flex-col rounded-3xl bg-gray-300 text-gray-900 shadow-lg w-[25rem] gap-4 overflow-hidden'>
      <div className=''>
        <Image
          src={imageUrl}
          alt=''
          className='max-w-full object-cover'
          width='600'
          height='400'
        />
      </div>
      <div className='flex flex-col gap-8 p-4'>
        <div className='flex flex-col gap-3'>
          <span
            className={
              'px-4 py-1 w-min rounded-full bg-gradient-to-b from-blue-800 to-blue-300 text-white text-xs'
            }
          >
            {tag}
          </span>
          <h4 className='font-bold'>{title}</h4>
          <p>{body}</p>
        </div>
        <div className=''>
          <div className='flex gap-3 items-center'>
            <Image
              src={author.avatarUrl}
              alt='user__image'
              className='rounded-full'
              width='40'
              height='40'
            />

            <div className='flex flex-col leading-none gap-1'>
              <h5 className=''>{author.name}</h5>
              <small className='text-gray-500'>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
