"use client"
import { IconMoodSadSquint } from '@tabler/icons-react'
import React from 'react'

export default function erroPersonalizado() {
  return (
    <div className='flex flex-col h-96 justify-center items-center gap-5'>
        <IconMoodSadSquint size={150} stroke={1} className='text-red-500'/>
        <h1 className='text-4xl font-black'>Ops... ocorreu um erro!</h1>
        <h2 className='text-sm text-zinc-400'>Que tal tomar um café e tentar novamente?</h2>
    </div>
  )
}
