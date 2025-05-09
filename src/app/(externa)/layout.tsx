import React from "react";
import Cabecalho from "./shared/Cabecalho";
import Rodape from "./shared/Rodape";

export default function Layout(props: {children: React.ReactNode}) {
  return (
    <div className=" flex flex-col bg-black min-h-screen">
      <Cabecalho />
      <div className="flex justify-center mt-[64px] ">
        <div className="w-[1100px] p-7">
          <main>{props.children}</main>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
