"use client";
import { createContext, useState } from "react";

interface DiaContextProps {
  dia: string;
  anterior: () => void;
  proximo: () => void;
}

const dias = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

const DiaContext = createContext<DiaContextProps>({
  dia: "",
  proximo: () => {},
  anterior: () => {},
});

export function DiaProvider({ children }: { children: React.ReactNode }) {
  const [indice, setIndice] = useState<number>(0);

  function proximo() {
    setIndice((prev) => (prev + 1) % dias.length);
  }

  function anterior() {
    setIndice((prev) => (prev - 1 + dias.length) % dias.length);
  }

  return (
    <DiaContext.Provider value={{ dia: dias[indice], proximo, anterior }}>
      {children}
    </DiaContext.Provider>
  );
}

export default DiaContext;
