
import React from 'react'

export default function page() {

    const obj = undefined

    return (
    <div>
        {(obj as unknown as {atributo: string}).atributo}
    </div>
  )
}
