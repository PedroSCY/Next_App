/* eslint-disable @typescript-eslint/no-explicit-any */
import Titulo from "@/app/(interna)/shared/Titulo";
import React from "react";

export default function Page(props: any) {
  return (
    <div>
      <Titulo
        texto="Rota  Dinâmica #1"
        legenda="Exibindo os parâmetros passados na URL"
      />
      <div className="flex flex-col gap-5 mt-10">
        <span className="text-2xl text-zinc-400 font-black">Id: {props.params.id}</span>
        <code>
          <pre className="text-2xl bg-black p-5 rounded-lg text-zinc-300">{JSON.stringify(props, null, 4)}</pre>
        </code>
      </div>
    </div>
  );
}
