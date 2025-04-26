import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'

export default function Loading() {
  return (
    <div className=' flex flex-col h-full justify-center items-center gap-2'>
        <IconLoader2 className='animate-spin' size={50}/>
        <span className='text-zinc-400'>Carregando...</span>
    </div>
  )
}
