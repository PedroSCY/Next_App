import Image from "next/image";
import React from "react";

export interface MenuUsuarioProps {
    nome: string
    email: string
    imagem: string
}

export default function MenuUsuario(props: MenuUsuarioProps) {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-zinc-800 p-2 rounded-lg ">
        <div className="flex flex-col">
            <span className="text-zinc-300 font-bold text-sm">{props.nome}</span>
            <span className="text-zinc-500 text-xs">{props.email}</span>
        </div>
      <Image
        src={props.imagem}
        alt="imagem do usuario"
        width={45}
        height={45}
        className="self-center rounded-full"
      />
    </div>
  );
}
