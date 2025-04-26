import { ReactNode } from "react";


export default function layout(props: { children: ReactNode }) {
  return (
    <div className='flex justify-center items-center h-36 text-4xl font-black  bg-zinc-200 text-red-500'>
        {props.children}
    </div>
  )
}
