import Link from 'next/link'
import React from 'react'

export default function Links() {
  
    function renderizarLink(texto: string, url: string) {
        return (
            <Link href={url} className='
                text-zinc-500 text-sm hover:text-zinc-300
                transition duration-300
            '>
                {texto}
            </Link>
        )
    }

    return (
    <div className='flex gap-16'>
        <div className='flex flex-col gap-5'>
            <h3>Projetos</h3>
            <div className='flex flex-col gap-2'>
                {renderizarLink('Férias', '/')}
                {renderizarLink('Aventura', '/')}
                {renderizarLink('Excursões', '/')}
                {renderizarLink('Maravilhas', '/')}
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <h3>Recursos</h3>
            <div className='flex flex-col gap-2'>
                {renderizarLink('Mídia', '/')}
                {renderizarLink('Relatos', '/')}
                {renderizarLink('Documentarios', '/')}
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <h3>Sobre</h3>
            <div className='flex flex-col gap-2'>
                {renderizarLink('Missão e Valores', '/')}
                {renderizarLink('Historia', '/')}
                {renderizarLink('Projetos Antigos', '/')}
                {renderizarLink('Ação Social', '/')}
            </div>
        </div>
        <div className='flex flex-col gap-5'>
            <h3>Mais +</h3>
            <div className='flex flex-col gap-2'>
                {renderizarLink('Política de Privacidade', '/')}
                {renderizarLink('Proteção de Dados', '/')}
                {renderizarLink('Termo de Uso', '/')}
                {renderizarLink('Suporte', '/')}
            </div>
        </div>
    </div>
  )
}
