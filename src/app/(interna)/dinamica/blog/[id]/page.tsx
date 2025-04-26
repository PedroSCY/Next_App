
import Titulo from "@/app/(interna)/shared/Titulo";
import React from "react";

interface PageProps {
  params: { id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {

  const resolvedParams = await params;
  const id = resolvedParams.id;
  const safeParams = { id };

  const resolvedSearchParams = await searchParams; 
  const safeSearchParams = resolvedSearchParams
    ? JSON.parse(JSON.stringify(resolvedSearchParams))
    : {};

  return (
    <div>
      <Titulo
        texto="Rota  Dinâmica #1"
        legenda="Exibindo os parâmetros passados na URL"
      />
      <div className="flex flex-col gap-5 mt-10">
        <span className="text-2xl text-zinc-400 font-black">Id: {id}</span>
        <code>
          <pre className="text-2xl bg-black p-5 rounded-lg text-zinc-300">
            {JSON.stringify({ params: safeParams, searchParams: safeSearchParams }, null, 4)}
          </pre>
        </code>
      </div>
    </div>
  );
}
