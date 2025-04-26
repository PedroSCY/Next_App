"use client";
import { useState } from "react";

export default function Numero() {
  const [numero, setNumero] = useState(0);

  return (
    <div onClick={() => setNumero(numero + 1)} className="flex flex-col items-center justify-center gap-5 bg-zinc-800 p-10 rounded-lg cursor-pointer">
      <span className="text-7xl font-black select-none">{numero}</span>
    </div>
  );
}
