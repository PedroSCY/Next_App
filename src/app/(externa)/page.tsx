import React from "react";
import Principal from "./landing/Principal";
import Titulo from "./shared/Titulo";
import Recursos from "./landing/Recursos";

export default function Page() {
  return (
    <div className="flex flex-col text-2xl">
      <Principal />
      <Titulo
        texto="Mar. Terra. Céus. Cultura. Fauna. Flora."
        legenda="Você escolhe o elemento. Nós revelamos o extraordinário."
        className="mb-7"
      />
      <Recursos />
    </div>
  );
}
