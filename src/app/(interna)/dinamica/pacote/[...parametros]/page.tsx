import Titulo from "@/app/(interna)/shared/Titulo";
import React from "react";

interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Page(props: PageProps) {
  return (
    <div>
      <Titulo
        texto="Rota  Dinâmica #2"
        legenda="Exibindo todos os parâmetros passados na URL"
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
