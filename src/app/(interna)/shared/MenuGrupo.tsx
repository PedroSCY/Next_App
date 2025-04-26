import React from 'react'

export interface MenuItemProps {
    titulo: string;
    children: React.ReactNode;
}

export default function MenuGrupo(props: MenuItemProps) {
  return (
    <div className='flex flex-col py-3 gap-5'>
        <h3 className='text-zinc-500'>{props.titulo}</h3>
        <div className='flex flex-col gap-3'>{props.children}</div>
    </div>
  )
}
