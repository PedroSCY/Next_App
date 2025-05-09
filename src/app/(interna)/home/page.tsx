import React from "react";
import Titulo from "../shared/Titulo";
import Funcionalidade from "./Funcionalidade";
import { IconApi, IconArrowsJoin2, IconBug, IconChartDots3, IconDatabase, IconLoader, IconRoute, IconRoute2 } from "@tabler/icons-react";

export default function Page() {
  return (
    <div>
      <Titulo
        texto="Introdução"
        legenda="Lista de funcionalidades implementadas com Next.js/APP"
      />
      <div className="grid grid-cols-4 gap-5 mt-10">
          <Funcionalidade url="/loading" titulo="Loading" icone={<IconLoader/>} />
          <Funcionalidade url="/erro" titulo="Erro" icone={<IconBug/>} />
          <Funcionalidade url="/dinamica/blog/a1b2c3?Seed=Brasil&Tipo=Ferias&Fichas=5" titulo="Rota Dinâmica #1" icone={<IconRoute/>} />
          <Funcionalidade url="/dinamica/pacote/maldivas?Fichas=5&Data=13-04-2026" titulo="Rota Dinâmica #2" icone={<IconRoute2/>} />
          <Funcionalidade url="/paralelas" titulo="Rotas paralelas" icone={<IconArrowsJoin2/>} />
          <Funcionalidade url="/estado" titulo="Usando Estado" icone={<IconDatabase/>} />
          <Funcionalidade url="/dados" titulo="Usando API" icone={<IconApi/>} />
          <Funcionalidade url="/contexto/a" titulo="Usando Contexto" icone={<IconChartDots3/>} />
      </div>
    </div>
  );
}
