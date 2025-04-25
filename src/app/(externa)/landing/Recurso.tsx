import Image from "next/image";
import React from "react";

export interface TituloProps {
  titulo: string;
  texto: string;
  imagem: string;
}

export default function Recurso(props: TituloProps) {
  return (
    <div className=" flex flex-col border border-zinc-800 p-5 rounded-xl ">
      <Image
        src={props.imagem}
        alt="Imagem do Recurso"
        width={250}
        height={300}
        className="self-center rounded-xl mb-7"
      />
      <h3 className="text-xl font-semibold mb-1">{props.titulo}</h3>
      <p className="text-zinc-500 text-sm ">{props.texto}</p>
    </div>
  );
}
