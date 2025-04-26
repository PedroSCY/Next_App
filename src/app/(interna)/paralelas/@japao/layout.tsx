/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export default function layout(props: any) {
  return (
    <div className='flex justify-center items-center h-36 text-4xl font-black  bg-zinc-200 text-red-500'>
        {props.children}
    </div>
  )
}
