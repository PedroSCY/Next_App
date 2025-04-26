import React from 'react'

export default function Template(props: { children: React.ReactNode }) {
  return (
    <div className='border-2 border-green-500 p-5'>{props.children}</div>
    // A diferença do template parao layou é que o template é renderizado novamente ao mudar a rota mesmo que o layout não mude
    // O template é renderizado em cada página, enquanto o layout é renderizado apenas uma vez para todas as páginas dentro dele
    // Caso o contexto seja utilizado no template, ele será resetadpo ao mudar de página mesmo que o layout não mude. 
  )
}
