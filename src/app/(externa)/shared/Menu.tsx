import React from 'react'
import MenuItem from './MenuItem'

export default function Menu() {
  return (
    <nav className='flex gap-5'>
        <MenuItem url='/' texto='Produtos'/>
        <MenuItem url='/' texto='blog'/>
        <MenuItem url='/' texto='Clientes'/>
        <MenuItem url='/' texto='Empresa'/>
    </nav>
  )
}
