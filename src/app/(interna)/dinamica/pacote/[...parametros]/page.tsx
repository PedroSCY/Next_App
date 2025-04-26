import Titulo from "@/app/(interna)/shared/Titulo";
import React from "react";

interface PageProps {
  params: { parametros: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {

  const resolvedParams = await params; 
  const parametros = resolvedParams.parametros; 
  const safeParams = { parametros };

  const resolvedSearchParams = await searchParams; 
  const safeSearchParams = resolvedSearchParams
    ? JSON.parse(JSON.stringify(resolvedSearchParams))
    : {};

  return (
    <div>
      <Titulo
        texto="Rota  Dinâmica #2"
        legenda="Exibindo todos os parâmetros passados na URL"
      />
      <div className="flex flex-col gap-5 mt-10">
        <span className="text-2xl text-zinc-400 font-black">Parâmetros: {parametros.join(", ")}</span>
        <code>
          <pre className="text-2xl bg-black p-5 rounded-lg text-zinc-300">
          {JSON.stringify({ params: safeParams, searchParams: safeSearchParams }, null, 4)}
          </pre>
        </code>
      </div>
    </div>
  );
}
