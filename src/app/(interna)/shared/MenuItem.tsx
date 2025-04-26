import Link from "next/link";
import React, { ReactNode } from "react";

export interface MenuItemProps {
  url: string;
  texto: string;
  icone: ReactNode;
  selecionado?: boolean;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.url}
      className={`flex items-center hover:text-white
        ${props.selecionado ? "text-white" : "text-zinc-500"}
        `}
    >
      <span>{props.icone}</span>
      <span className="ml-3 text-lg">{props.texto}</span>
    </Link>
  );
}
