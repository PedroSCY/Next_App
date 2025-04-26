"use client";
import React from "react";
import MenuItem from "./MenuItem";
import { IconBug, IconLayoutDashboard, IconLoader } from "@tabler/icons-react";
import MenuGrupo from "./MenuGrupo";
import { usePathname } from "next/navigation";

export default function Menu() {
  const url = usePathname();

  return (
    <nav className="flex flex-col gap-4 ">
      <MenuItem
        url="/home"
        texto="Início"
        icone={<IconLayoutDashboard />}
        selecionado={url === "/home"}
      />
      <MenuGrupo titulo="Exercícios">
        <MenuItem
          url="/loading"
          texto="Loading"
          icone={<IconLoader />}
          selecionado={url === "/loading"}
        />
        <MenuItem
          url="/erro"
          texto="Erro"
          icone={<IconBug />}
          selecionado={url === "/erro"}
        />
      </MenuGrupo>
    </nav>
  );
}
