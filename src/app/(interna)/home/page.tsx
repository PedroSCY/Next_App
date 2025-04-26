import React from "react";
import Titulo from "../shared/Titulo";
import Funcionalidade from "./Funcionalidade";
import { IconBug, IconLoader } from "@tabler/icons-react";

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
      </div>
    </div>
  );
}
