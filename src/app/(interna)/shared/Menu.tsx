import React from 'react'
import MenuItem from './MenuItem'
import { IconBug, IconLayoutDashboard, IconLoader } from '@tabler/icons-react'
import MenuGrupo from './MenuGrupo'

export default function Menu() {
  return (
    <nav className='flex flex-col gap-4 '>
        <MenuItem url='/home' texto='Início' icone={<IconLayoutDashboard/>}/>
        <MenuGrupo titulo='Exercícios'>
            <MenuItem url='/loading' texto='Loading' icone={<IconLoader/>}/>
            <MenuItem url='/erro' texto='Erro' icone={<IconBug/>}/>
        </MenuGrupo>
    </nav>
  )
}
