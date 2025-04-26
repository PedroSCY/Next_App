import { IconMenu2 } from '@tabler/icons-react'
import React from 'react'
import Menu from './Menu'
import MenuUsuario from './MenuUsuario'

export default function Cabecalho() {
  return (
    <header className='
        flex items-center justify-between px-7 h-20 bg-zinc-950
    '>
        <IconMenu2 className='text-zinc-400 hover:text-zinc-200 cursor-pointer'/>
        <MenuUsuario/>
    </header>
  )
}
