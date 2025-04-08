import Link from "next/link";
import React from "react";

export interface BotaoProps {
  url: string;
  onclick?: () => void;
  destacado?: boolean;
  children: string | React.ReactNode;
  maior?: boolean
}

export default function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <button
        className={`${
          props.destacado
            ? "bg-zinc-100 text-black hover:border-zinc-200"
            : "bg-black text-zinc-400 hover:border-zinc-400"
        } ${props.maior ? 'px-4 py-2' : 'px-3 py-1.5'}
          border border-zinc-600 hover:border-zinc-400 rounded-lg text-sm`}
      >
        {props.children}
      </button>
    );
  }

  return props.url ? (
    <Link href={props.url}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
