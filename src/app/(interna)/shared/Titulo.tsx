import React from "react";

export interface TituloProps {
  texto: string;
  legenda?: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div>
      <h1 className="text-2xl font-black 
      bg-clip-text text-transparent
      bg-gradient-to-b from-zinc-200 to-zinc-400">{props.texto}</h1>
      {props.legenda && <h2 className="text-xs text-zinc-400">{props.legenda}</h2>}
    </div>
  );
}
