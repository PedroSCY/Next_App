/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Layout(props: any) {
  return (
    <div className='flex justify-center items-center h-36 text-4xl font-black bg-red-500'>
      {props.children}
    </div>
  )
}
