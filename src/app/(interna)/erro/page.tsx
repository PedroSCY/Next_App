'use client';

import React, { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const obj = undefined;
    console.log((obj as unknown as { atributo: string }).atributo);
  }, []);

  return (
    <div>
      Forçando erro...
    </div>
  );
}