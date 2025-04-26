import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className='flex justify-center items-center h-36 text-4xl font-black bg-red-500'>
      {props.children}
    </div>
  )
}
