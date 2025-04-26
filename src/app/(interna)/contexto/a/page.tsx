"use client";
import React, { useContext } from "react";
import DiaContext from "../DiaContext";
import Botao from "@/app/shared/Botao";
import Link from "next/link";

export default function Page() {
  const { dia, anterior, proximo } = useContext(DiaContext);
  return (
    <div className="flex flex-col gap-10">
      <span className="text-7xl font-black">{dia}</span>
      <div className="flex gap-5">
        <Botao onclick={anterior}>Anterior</Botao>
        <Botao onclick={proximo} destacado>
          Próximo
        </Botao>
      </div>
      <Link href="/contexto/b">Ir para Página B</Link>
    </div>
  );
}
