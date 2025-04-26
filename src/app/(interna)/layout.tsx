import React from "react";
import Logo from "../shared/Logo";
import Menu from "./shared/Menu";
import Cabecalho from "./shared/Cabecalho";

export default function layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex bg-zinc-900 min-h-screen">
      <aside className="flex flex-col bg-black w-72 p-7 gap-10">
        <Logo />
        <Menu />
      </aside>
      <div className="flex flex-col flex-1">
        <Cabecalho/>
        <main className="flex-1 p-7">{props.children}</main>
      </div>
    </div>
  );
}
