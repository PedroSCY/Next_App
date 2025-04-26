/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React from "react";

export interface FuncionalidadeProps {
  titulo: string;
  icone: any;
  url: string;
}

export default function Funcionalidade(props: FuncionalidadeProps) {
  return (
    <Link
      href={props.url}
      className="
        flex flex-col border border-zinc-700 rounded-lg items-center overflow-hidden
    "
    >
      {React.cloneElement(props.icone, { size: 80, stroke: 1, className: "py-3" })}
      <h3 className="flex justify-center bg-black w-full p-3">{props.titulo}</h3>
    </Link>
  );
}
