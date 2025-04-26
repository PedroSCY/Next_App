import React from 'react'


function textoEm2s(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Japão')
    }, 2000)
  })
}

export default async function Page() {
  const texto = await textoEm2s()
  return <span>{texto}</span>
}
